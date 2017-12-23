let count = 0;
const addOne = () => {
  count++;
  console.log("count",count);
  
  renderCounterApp(count);
};
const minusOne = () => {
  count--;
  renderCounterApp(count);
};
const reset = () => {
  count = 0;
  renderCounterApp();
};


const appRoot = document.getElementById('app');
const renderCounterApp = (count=0) => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();