
import RootNavigation from './app/Navigation/RootNavigation';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { Provider } from 'react-redux';
import Config from './app/Config';


export default function App() {
  return (
    <Provider store={Config.store}>
<PersistGate loading={null} persistor={Config.persistor}>
  <RootNavigation/>
  </PersistGate>
  </Provider>
  )
}

