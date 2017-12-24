class Indecison extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteAll = this.handleDeleteAll.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteoption = this.handleDeleteoption.bind(this);
        this.state = {
            options: []
        }
    }
    componentDidMount()
    {
        try{
            const json=localStorage.getItem('options');
            const options= JSON.parse(json);
    
            if(options){
                this.setState(()=>({options}));
            }
           
            console.log("did mount");
        }
        catch(e)
        {
            //do nothing
        }
       
    }
    componentDidUpdate(prevProps,prevState)
    {
        if(prevState.options.length!== this.state.options.length)
        {
            const json =JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
            console.log('Saving Data');
        }
        
        
    }
    componentWillUnmount()
    {
        console.log('will unmount');
        
    }
    handleDeleteAll() {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteoption(optiontoRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optiontoRemove !== option
            )
        }))
    }
    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
    }
    handleAddOption(option) {
        if (!option) {
            return 'Enter valid value to add item';
        }
        else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        else {
            this.setState((prevState) => ({ options: prevState.options.concat(option) }))
        }
    }
    render() {
        // const title = "Indecision App";
        const subtitle = "Put your life in the hand of a computer";
        return (
            <div>
                <Header subtitle={subtitle} />
                <Action hasOptions={this.state.options.length > 0} pick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteAll}
                    handleDeleteoption={this.handleDeleteoption} />
                <Form handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
Indecison.defaultProps = {
    options: []
};
const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            {props.subtitle && <h2>{props.subtitle}</h2>}
        </div>
    );

};
Header.defaultProps = {
    title: "Indecision"
};
const Action = (props) => {
    return (
        <div>
            <button onClick={props.pick} disabled={!props.hasOptions}>What should i do?</button>
        </div>
    );
};
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            {props.options.map((option) => <Option
                key={option} optiontext={option} handleDeleteoption={props.handleDeleteoption} />)}
        </div>
    );
};
const Option = (props) => {
    return (
        <div>
            option:{props.optiontext}
            <button
                onClick={(e) => {
                    props.handleDeleteoption(props.optiontext);
                }}

            >Remove</button>
        </div>
    );
};
class Form extends React.Component {
    constructor(props) {
        super(props);
        this.addOption = this.addOption.bind(this);
        this.state = {
            error: undefined
        }
    }
    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        this.setState(() => ({ error: error })
        )
        if(!error)
        {
            e.target.elements.option.value='';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" placeholder="Enter your option here" name='option' />
                    <button >Add Option</button>
                </form>
            </div>
        );
    }

}
ReactDOM.render(<Indecison />, document.getElementById('app'));