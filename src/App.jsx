import React from 'react';

const App = () => {
  const handleChange = (e) => {
    console.log('api call...');
  };

  const handleMouseMove = (e) => {
    //everytime the mouse moved this function will be invoked
    console.log('api call to do some operations...');
  };

  const debounce = (fnc, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fnc(...args), delay);
    };
  };

  const throttle = (fnc, delay) => {
    let flag = true;
    return function (...args) {
      if (flag) {
        fnc(...args);
        flag = false;
        setTimeout(() => (flag = true), delay);
      }
    };
  };

  window.addEventListener('mousemove', throttle(handleMouseMove, 1000));

  return (
    <div className="App">
      <header className="App-header">
        <p> Search </p>
        <input type="text" onChange={debounce(handleChange, 1000)} />
      </header>
    </div>
  );
};

export default App;
