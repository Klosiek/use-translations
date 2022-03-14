# <center> Welcome to use-translations 👋 </center>

## _React hook that format and dynamically types your translations._

[![alt Version](https://img.shields.io/npm/v/use-translations?color=blue)](https://www.npmjs.com/package/use-translations) [![alt License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

![use-translations](https://i.imgur.com/tRUGvpH.png)
![use-translations](https://i.imgur.com/FLy5y3g.png)

**🏠 [Homepage](https://github.com/Klosiek/useTranslations 'use-translations Github')**

## Documentation

#### Usage

- [Simple hook example](#simple-hook-example)
- [With react-intl example](#with-react-intl-example)
- [With i18n example](#with-i18n-example)

#### API

- [useTranslations](#usetranslations)
- [TranslationProvider](#translationprovider)

## Install

`npm i use-translations`
or
`yarn add use-translations`

## Usage

- To use `useTranslations` hook, first you need to wrap component with `<TranslationProvider>` component.
  `<TranslationProvider>` takes 1 property that is `formatMessage`.
- Because it is dynamic and supports multiple i18n libraries (react-intl, i18n and others), You have to provide formatting function as prop.
- Provided translations needs to be as **_readonly array_**.

#### Simple hook example

```ts
const translationStrings = [
  'errors.toast',
  'errors.bookings.status',
  'errors.bookings.confirmation'
] as const;

const translations = useTranslations(translationStrings);

translations: {
  errorsToast: 'translation';
  errorsBookingsStatus: 'translation';
  errors.BookingsConfirmation: 'translation';
}
```

#### With react-intl example

https://github.com/Klosiek/use-translations/tree/main/example/ReactIntlExample.tsx

```tsx
import { IntlContext, IntlProvider } from 'react-intl';
import { TranslationProvider, useTranslations } from 'use-translations';

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
```

#### With i18n example

https://github.com/Klosiek/use-translations/tree/main/example/I18nExample.tsx

```tsx
import i18n from 'i18next';
import { initReactI18next, useTranslation } from 'react-i18next';
import { TranslationProvider, useTranslations } from 'use-translations';

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
```

For now it only supports translations separated with `.`

## API

## useTranslations

- #### Props

| Prop name | Description                                       | Default value | Example values                                |
| --------- | ------------------------------------------------- | ------------- | --------------------------------------------- |
| default   | Array of translations to create dynamically types | []            | ['form.first.name', 'form.errors.first.name'] |

- #### Returns

Hook return object of translations in camelCase provided in hook.

### TranslationProvider

- #### Props

| Prop name     | Description                       | Default value | Example values              |
| ------------- | --------------------------------- | ------------- | --------------------------- |
| formatMessage | Function provided by i18n library | null          | (id) => formatMessage({id}) |

## Authors

👤 **Sebastian Kłosiński**

- Github: [@Klosiek](https://github.com/Klosiek)
- LinkedIn: [@https://www.linkedin.com/in/sebastian-klosinski](https://www.linkedin.com/in/sebastian-klosinski/)

Thanks to [@Jaaneek](https://github.com/Jaaneek) for guidance.

## [](https://github.com/Klosiek/use-translations#-contributing)🤝 Contributing

Contributions, issues and feature requests are welcome!  
Feel free to check the [issues page](https://github.com/Klosiek/useFilePicker/issues).

## Show your support

Give a ⭐️ if this project helped you!

[![PixelShiba](https://emoji.gg/assets/emoji/5344-pixelshiba.gif)](https://emoji.gg/emoji/5344-pixelshiba)
