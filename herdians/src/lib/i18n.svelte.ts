import { id } from './translations/id';
import { en } from './translations/en';
import { ar } from './translations/ar';

export type Lang = 'id' | 'en' | 'ar';

const map = { id, en, ar };

let _lang = $state<Lang>('id');

export const i18n = {
  get lang() { return _lang; },
  get t() { return map[_lang]; },
  get dir() { return map[_lang].dir; },
  setLang(l: Lang) { _lang = l; },
};
