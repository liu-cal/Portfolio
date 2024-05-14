import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import english from './assets/en.json';
import french from './assets/fr.json';

const resources = {
    en: {
        translation: english
    },
    fr: {
        translation: french
    }
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
