import React, { createContext } from 'react';

import { ITranslationProviderProps, TTranslationContext } from './types';

export const TranslationContext = createContext<TTranslationContext>(null);

export const TranslationProvider = ({ children, formatMessage }: ITranslationProviderProps) => (
  <TranslationContext.Provider value={{ formatMessage }}>{children}</TranslationContext.Provider>
);
