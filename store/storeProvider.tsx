'use client';
import { Provider } from 'react-redux';
import makeStore from './store'; // Import the makeStore function

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const store = makeStore(); // Create the store using makeStore
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};