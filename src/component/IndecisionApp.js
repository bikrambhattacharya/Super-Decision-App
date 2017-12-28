import React from 'react';
import Form from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';
class Indecison extends React.Component {
    state = {
        options: [],
        selectedOption:undefined

    };
    // constructor(props) {
    //     super(props);
    //     this.handleDeleteAll = this.handleDeleteAll.bind(this);
    //     this.handlePick = this.handlePick.bind(this);
    //     this.handleAddOption = this.handleAddOption.bind(this);
    //     this.handleDeleteoption = this.handleDeleteoption.bind(this);
    //                                                        this is replaced using new class features
    //     this.state = {                                     and arrow function features like this scope
    //         options: []                               binding is not needed in arrow function        
    //     }
    // }
    closeModal=(e)=>{
        e.preventDefault();
        this.setState(()=>({
            selectedOption:undefined
        }));
    }
    handleDeleteAll=()=> {
        this.setState(() => ({ options: [] }));
    }
    handleDeleteoption=(optiontoRemove)=> {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) =>  optiontoRemove !== option
            )
        }))
    }
    handlePick=()=> {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        // alert(option);
        this.setState(()=>({selectedOption:option}))
    }
    handleAddOption=(option)=> {
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
    render() {
        const subtitle = "Confused?? Put your choices in the hands of this app";
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                
                <div className="widget">
                <Action hasOptions={this.state.options.length > 0} pick={this.handlePick} />
                <Options options={this.state.options} handleDeleteOptions={this.handleDeleteAll}
                    handleDeleteoption={this.handleDeleteoption} />
                <Form handleAddOption={this.handleAddOption} />
                <OptionModal selectedOption={this.state.selectedOption} closeModal={this.closeModal}/>
                </div>
                </div>
                </div>
        );
    }
}
Indecison.defaultProps = {
    options: []
};
export default Indecison;