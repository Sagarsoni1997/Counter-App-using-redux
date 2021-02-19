import React from 'react';
import CounterApp from './src/CounterApp';
import { Provider } from "react-redux";
import { store } from "./src/Store/Store";

const App = () => {
  return (
    <Provider store={store}>
     <CounterApp/>
    </Provider>
  );
}

export default App;
