import camelcase from 'camelcase';
import { useContext } from 'react';

import { TranslationContext } from './TranslationProvider';

import { TMessages } from './types';

export const useTranslations = <T extends readonly string[]>(key: T): TMessages<T> => {
  const context = useContext(TranslationContext);

  if (context === null) {
    throw new Error('useTranslation was used outside TranslationProvider.');
  }

  const { formatMessage } = context;

  return Object.fromEntries(
    key.map(translationKey => [camelcase(translationKey), formatMessage(translationKey)])
  ) as TMessages<T>;
};
