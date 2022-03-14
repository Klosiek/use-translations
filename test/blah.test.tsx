import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { TranslationProvider } from '../src';
import { ReactIntlExample } from '../example/ReactIntlExample';
import { I18nExample } from '../example/I18nExample';

describe('useTranslations hook', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TranslationProvider formatMessage={id => id}>Test</TranslationProvider>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('with react-intl example should work', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactIntlExample />, div);
    expect(div.textContent).toContain('Post code react-intl');
    ReactDOM.unmountComponentAtNode(div);
  });

  it('with i18n example should work', () => {
    const div = document.createElement('div');
    ReactDOM.render(<I18nExample />, div);
    expect(div.textContent).toContain('Post code 18n');
    ReactDOM.unmountComponentAtNode(div);
  });
});
