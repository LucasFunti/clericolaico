'use client';
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enNs1 from "./locales/en/ns1.json"
import esNs1 from "./locales/es/ns1.json"
import brNs1 from "./locales/br/ns1.json"
import grNs1 from "./locales/gr/ns1.json"

export const defaultNS = 'ns1';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        ns1: enNs1
      },
      es: {
        ns1: esNs1
      },
      br: {
        ns1: brNs1
      },
      gr: {
        ns1: grNs1
      }
    },
    defaultNS: defaultNS,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;
