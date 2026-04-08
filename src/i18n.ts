import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from "./i18n/en.json"
import uk from "./i18n/uk.json"

const savedLang = localStorage.getItem("lang") || "en"

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
    },
    lng: savedLang,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  })

export default i18n