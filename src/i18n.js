import en from './locales/en.json';
import fr from './locales/fr.json';
import es from './locales/es.json';

const resources = { en, fr, es };

export function getTranslation(lang = 'en') {
  return resources[lang] || resources['en'];
}
