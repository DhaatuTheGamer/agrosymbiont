import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "hero_title_1": "Science",
      "hero_title_2": "Meets",
      "hero_title_3": "Sustainability",
      "hero_subtitle_1": "Harnessing ",
      "hero_subtitle_highlight": "nanotechnology",
      "hero_subtitle_2": " and organic innovation to create profitable, eco-friendly farming systems.",
      "start_growing": "Start Growing with Us",
      "learn_more": "Learn More"
    }
  },
  hi: {
    translation: {
      "hero_title_1": "विज्ञान और",
      "hero_title_2": "स्थिरता",
      "hero_title_3": "का संगम",
      "hero_subtitle_1": "लाभदायक, पर्यावरण के अनुकूल कृषि प्रणाली बनाने के लिए ",
      "hero_subtitle_highlight": "नैनो तकनीक",
      "hero_subtitle_2": " और जैविक नवाचार का उपयोग।",
      "start_growing": "हमारे साथ जुड़ें",
      "learn_more": "और जानें"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // react already safes from xss
    }
  });

export default i18n;
