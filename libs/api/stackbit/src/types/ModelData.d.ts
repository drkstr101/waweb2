import { Model } from '@watheia/model';

export interface ModelData {
  objects: Model[];
  pages: PageModel[];
  props: Record<string, Model>;
}
