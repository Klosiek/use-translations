import * as React from 'react';
import { IntlContext, IntlProvider } from 'react-intl';
import { TranslationProvider, useTranslations } from '../src';

const messages = {
  pl: {
    'form.post.code': 'Kod pocztowy react-intl',
  },
  en: {
    'form.post.code': 'Post code react-intl',
  },
};

export const ReactIntlExample = () => {
  const locale = 'en';

  return (
    <IntlProvider locale={locale} messages={messages[locale]}>
      <IntlContext.Consumer>
        {({ formatMessage }) => (
          <TranslationProvider formatMessage={id => formatMessage({ id })}>
            <MessageExample />
          </TranslationProvider>
        )}
      </IntlContext.Consumer>
    </IntlProvider>
  );
};

const MessageExample = () => {
  const testTranslations = ['form.post.code'] as const;
  const translations = useTranslations(testTranslations);

  return <>{translations.formPostCode}</>;
};
