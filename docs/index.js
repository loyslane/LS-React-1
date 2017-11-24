/*eslint no-unused-vars: "off"*/
import React from 'react';
import ReactDom from 'react-dom';
import TodoForm from './components/todoForm';

require('!style-loader!css-loader!sass-loader!./index.scss');


const App = () => (
  <div>
    <TodoForm />
  </div>
);

ReactDom.render(<App />, document.getElementById('root'));
