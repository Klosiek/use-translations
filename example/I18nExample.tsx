import * as React from 'react';
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { TranslationProvider, useTranslations } from '../src';

const messages = {
  pl: {
    'form.post.code': 'Kod pocztowy i18n',
  },
  en: {
    'form.post.code': 'Post code 18n',
  },
};

i18n.use(initReactI18next).init({
  resources: {
    pl: {
      translation: messages.pl,
    },
    en: {
      translation: messages.en,
    },
  },
});

i18n.changeLanguage('en');

export const I18nExample = () => {
  const { t } = useTranslation();

  return (
    <TranslationProvider formatMessage={id => t(id)}>
      <MessageExample />
    </TranslationProvider>
  );
};

const MessageExample = () => {
  const testTranslations = ['form.post.code'] as const;
  const translations = useTranslations(testTranslations);

  return <div>{translations.formPostCode}</div>;
};
