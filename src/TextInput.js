  
import React from 'react';

class TextInput extends React.Component {

constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
}
    handleText(event) {
        const inputValue = event.target.value;
        this.props.getInfo(inputValue);
    }

    render() {
        return(
            <form>
               <textarea cols="30" rows="10" onChange={this.handleText}></textarea>
            </form>
        )
    }
}


export default TextInput;