/**
 * @format
 */

import React from 'react';

import { Providers } from './contexts';
import { ErrorBoundary } from './libs/ErrorBoundary';
import { Helmet } from './libs/Helmet';
import { Navigation } from './navigation';

function App(): React.JSX.Element {
  return (
    <Helmet>
      <ErrorBoundary>
        <Providers>
          <Navigation />
        </Providers>
      </ErrorBoundary>
    </Helmet>
  );
}

export default App;
