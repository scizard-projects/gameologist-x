import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import { Helmet } from '../libs/Helmet';
import { SafeAreaProvider as SafeArea } from '../libs/SafeAreaView';
import { ToastProvider } from '../libs/Toast';
import { persistor, store } from '../redux';
import { Compose } from './Compose';

interface Props {
  children: React.ReactNode;
}

const HelmetWrapper = (children: React.ReactNode) => (
  <Helmet>{children}</Helmet>
);

const ReduxProviderWrapper = (children: React.ReactNode) => (
  <ReduxProvider store={store}>{children}</ReduxProvider>
);

const PersistGateProvider = (children: React.ReactNode) => (
  <PersistGate loading={null} persistor={persistor}>
    {children}
  </PersistGate>
);

const SafeAreaProvider = (children: React.ReactNode) => (
  <SafeArea>{children}</SafeArea>
);

export function Providers(props: Props) {
  return (
    <Compose
      components={[
        HelmetWrapper,
        ReduxProviderWrapper,
        PersistGateProvider,
        SafeAreaProvider,
      ]}>
      {props.children}
      <ToastProvider />
    </Compose>
  );
}
