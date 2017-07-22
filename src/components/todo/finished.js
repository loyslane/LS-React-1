import React from 'react';

const style = {
  textDecoration: 'line-through'
}

const Finished = (props) => {
  return (
    <div>
      {props.newData.map((name, index) => {
        return <li style={style} key={index}>{name}</li>
      })}
  </div>)
};

export default Finished;