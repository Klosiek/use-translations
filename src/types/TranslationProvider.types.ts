export type TTranslationContext = {
  formatMessage: (id: string) => string;
} | null;

export interface ITranslationProviderProps {
  children: React.ReactNode;
  formatMessage: (id: string) => string;
}
