import React from 'react';

const Todo = (props) => {
  return (
    <div>
      {props.data.map((name, index) => {
        return <li onClick={() => props.click(index)} key={index}>{name}</li>
    })}
  </div>)
};

export default Todo;