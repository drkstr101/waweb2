import { supabase } from '@watheia/waweb.auth';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await supabase.auth.api.setAuthCookie(req, res);
    const { user } = await supabase.auth.api.getUserByCookie(req);
    if (user) {
      // Enable Preview Mode by setting the cookies
      res.setPreviewData({});
    } else {
      res.clearPreviewData();
    }
  } else {
    const error = { message: `Method not supported (${req.method})` };
    return res.status(401).json({ error });
  }
}
