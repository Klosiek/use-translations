import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { I18nExample } from './I18nExample';
import { ReactIntlExample } from './ReactIntlExample';

const App = () => {
  return (
    <>
      <ReactIntlExample />
      <I18nExample />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
