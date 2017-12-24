class Indecison extends React.Component {
    constructor(props)
    {
        super(props);
        this.handleDeleteAll=this.handleDeleteAll.bind(this);
        this.handlePick=this.handlePick.bind(this);
        this.handleAddOption=this.handleAddOption.bind(this);
        this.state={
            options:[]
        }
    }
    handleDeleteAll()
    {
        this.setState(()=>{
            return{
                options:[]
            };
        });
    }
    handlePick()
    {
        const randomNum=Math.floor(Math.random()*this.state.options.length);
    const option=this.state.options[randomNum];
    alert(option);
    }
    handleAddOption(option)
    {
        if(!option)
        {
            return 'Enter valid value to add item';
        }
        else if( this.state.options.indexOf(option)>-1)
        {
            return 'This option already exists';
        }
        else{ 
        this.setState((prevState)=>{
            return{
                options:prevState.options.concat(option)
            }
        })
    }
    }
    render() {
        const title = "Indecision App";
        const subtitle = "Put your life in the hand of a computer";
        return (
            <div>
                <Header title={title} subtitle={subtitle} />
                <Action hasOptions={this.state.options.length>0} pick={this.handlePick}/>
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteAll} />
                <Form handleAddOption={this.handleAddOption} />
            </div>
        );
    }
}
// class Header extends React.Component {
//     render() {

//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h1>{this.props.subtitle}</h1>
//             </div>
//         );
//     };
// }
const Header = (props)=>
{
    return (
        <div>
            <h1>{props.title}</h1>
            <h1>{props.subtitle}</h1>
        </div>
    );
    
};
// class Action extends React.Component {
//     handlepick() {
//         alert('handlepick')
//     }
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.pick} disabled={!this.props.hasOptions}>What should i do?</button>
//             </div>
//         )
//     };
// }
const Action=(props)=>{
    return (
        <div>
            <button onClick={props.pick} disabled={!props.hasOptions}>What should i do?</button>
        </div>
    );
};
// class Options extends React.Component {
    
    
//     render() {
//         return (
//             <div>
//                 <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//                 {this.props.options.map((option) => <Option key={option} optiontext={option} />)}
//             </div>
//         );
//     }
// }
const Options= (props)=>
{
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {props.options.map((option) => <Option key={option} optiontext={option} />)}
        </div>
    );
};
// class Option extends React.Component {
//     render() {
//         return (
//             <div>
//                 option:{this.props.optiontext}
//             </div>
//         );
//     }
// }
const Option =(props)=>
{
    return (
        <div>
            option:{props.optiontext}
        </div>
    );
};
class Form extends React.Component {
    constructor(props)
    {
        super(props);
        this.addOption=this.addOption.bind(this);
        this.state={
            error:undefined
        }
    }
    addOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
       const error=this.props.handleAddOption(option);
       this.setState(()=>
    {
        return{
            error:error
        }
    })
    }
    render() {
        return (
            <div>
            {this.state.error&& <p>{this.state.error}</p>}
                <form onSubmit={this.addOption}>
                    <input type="text" placeholder="Enter your option here" name='option' />
                    <button >Add Option</button>
                </form>
            </div>
        );
    }

}

// const  User = (props)=>
// {
//     return( 
//         <div>
//         <p>Name: {props.name}</p>
//         <p>Age: {props.age}</p>
//         </div>
//     );
// };

ReactDOM.render(<Indecison />, document.getElementById('app'));