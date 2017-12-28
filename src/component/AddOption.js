import React from 'react';

export default class Form extends React.Component {
    state={
        error: undefined
    };
    // constructor(props) {
    //     super(props);
    //     this.addOption = this.addOption.bind(this);    // this is replaced using new class features
    //     this.state = {                                     and arrow function features like this scope
    //         error: undefined                               binding is not needed in arrow function
    //     }
    // }
    addOption=(e)=> {
        
        e.preventDefault();
        console.log("abc");
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
                {this.state.error && <p className="add-option-error">{this.state.error}</p>}
                <form onSubmit={this.addOption} className="add-option">
                    <input type="text" placeholder="Enter your option here" name='option' className="add-option-input"/>
                    <button className="button">Add Option</button>
                </form>
            </div>
        );
    }

}