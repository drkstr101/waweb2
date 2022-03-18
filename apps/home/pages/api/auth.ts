import { createClient, User } from '@supabase/supabase-js';
import { NextApiRequest, NextApiResponse } from 'next';

const supabaseUrl = process.env['NEXT_PUBLIC_SUPABASE_URL'];
const supabaseKey = process.env['SUPABASE_ADMIN_KEY'];

const supabase = createClient(supabaseUrl, supabaseKey);

const message = `Please check your inbox for the login url.`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const email = req.body.email;
    console.info('Check for existing user', email);
    // pull existing user by email
    const { body } = await supabase
      .from<Partial<User>>('users')
      .select(`email`)
      .eq('email', email);

    if (body && body.length > 0) {
      // if user exists, send auth link
      console.info('Existing user detected, sending magic link.');
      const { error } = await supabase.auth.api.sendMagicLinkEmail(email);
      if (error) {
        console.error('ERROR', error);
        return res.status(401).json({ error });
      } else {
        return res.status(200).json({ message });
      }
    } else {
      console.info('New user detected, sending invite email.');
      const { error } = await supabase.auth.api.inviteUserByEmail(email);
      if (error) {
        console.error('ERROR', error);
        return res.status(401).json({ error });
      } else {
        return res.status(200).json({ message });
      }
    }
  } else {
    const error = { message: `Method not supported (${req.method})` };
    console.error('ERROR', error);
    return res.status(401).json({ error });
  }
}
