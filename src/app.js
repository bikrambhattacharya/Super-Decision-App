const title="Indecision App";
const subtitle="Put your life in the hand of a computer";
const options=['thing one','thing two'];
class Indecison extends React.Component
{
    render()
    {
        return (
            <div>
                    <Header title={title} subtitle={subtitle}/>
                    <Action  />
                    <Options  option={option} />
                    <Option />
                    <Form />
            
            </div>
        );
    }
}
class Header extends React.Component
{
render()
{
    
    return (
        <div>
        <h1>{this.props.title}</h1>
        <h1>{this.props.subtitle}</h1>
        </div>
    );
};
}
class Action extends React.Component
{
    render()
    {
        return (
            <div>
            <button>What should i do?</button>
            </div>
        )
    };
}
class Options extends React.Component
{
    render()
    {
        return (
            <div>
            {this.props.options.map((option)=> <p key={option} optiontext={option}></p>)}
            </div>
        );
    }
}
class Option extends React.Component
{
    render()
    {
        return (
            <div>
          
            </div>
        );
    }
}
class Form extends React.Component
{
    render()
    { 
        return (
            <div>
            <form>
            <input type="text" placeholder="Enter your option here" />
            <button>Add Option</button>
            </form>
            </div>
        );
    }
    
}

ReactDOM.render(<Indecison />,document.getElementById('app'));