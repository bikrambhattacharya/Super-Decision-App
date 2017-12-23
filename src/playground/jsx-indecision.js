const appRoot = document.getElementById('app');
const app = {
    title: "Indecision App",
    subtitle: "Put your life in the hands of a computer",
    options: ["hi"]
};
const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        render();
    }
    console.log("form submitted", app.options.length);
};
const RemoveAll = () => {
    app.options = [];
    render();
};
const RandomChoice =() => {
    const randomNum=Math.floor(Math.random()*app.options.length);
    const option=app.options[randomNum];
    alert(option);
    // console.log(randomNum);
}
const render = () => {
    console.log("function called");
    const template = (
        <div>
            <h1>{app.title.toUpperCase()}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? "here are your options" : "No optionss"}</p>
            <button disabled ={app.options.length===0} onClick={RandomChoice}>What should I do?</button>
            <button onClick={RemoveAll}>Remove all</button> 
            <ol>
                {
                    app.options.map((option)=><li key={option}>Item: {option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>);

    ReactDOM.render(template, appRoot);
};

render();
