import React from 'react';
import * as serviceWorker from './serviceWorker';

import Form from "./js/components/Form";
import Todo from "./js/components/ToDo";
import './App.css';

function App() {
  return (
    <Todo />
  );
}

export default App;

serviceWorker.unregister();