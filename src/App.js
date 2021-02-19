import logo from './logo.svg';
import React from 'react';
import MIMIMITranslator from './MIMIMITranslator';
import TextInput from './TextInput';



class App extends React.Component {
  constructor(props) {
    super(props);
    this.text = '';
    this.translation = this.translation.bind(this);
  }

  translation(writtenText) {
    this.text = writtenText.replace(/[aeou]/g, 'i').replace(/[qwrtypsdfghjklñzxcvbnm]/g, 'm').replace(/[QWRTYPSDFGHJKLÑZXCVBNM]/g, 'M').replace(/[áéóú]/g, 'í').replace(/[AEOU]/g, 'I').replace(/[ÁÉÚÓ]/g, 'Í');
    this.forceUpdate();
  }

  render() {

    return (
      <div className="page"> 
    
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />
      <img src={logo} className="App-logo" alt="logo" />  
      <p className="texto">Hola Sandri!</p>
      <p className="texto">Escribe algo que quieras decirme aquí</p>
        <TextInput getInfo={this.translation} />
        <div className="display">
          <MIMIMITranslator displayText={this.text} />
        </div>
      </div>
    );
  }
}

export default App;

