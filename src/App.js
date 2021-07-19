
import './App.css';

import React, { Component } from 'react';

class App extends Component {

  state ={ 
    text: "",
    target_lang: "",
    tranlate: "Translation goes here",
    value: 'select'
  }



  handleChange  = (e) =>{
      this.setState({
        [e.target.name] : e.target.value
      })
    }

  changeValue = (e) =>{
    this.setState({value: e.target.value});

  }



    handleSubmit = (e) =>{
    e.preventDefault();


    fetch("https://api-free.deepl.com/v2/translate", {
      body: `auth_key=5652c0b9-adcf-7f2e-f6a2-3a577f700dc9:fx&text=${this.state.text}&target_lang=${this.state.value}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "POST"
    })
    .then(e =>{
      const temp = e.json()
      return temp

    })
    .then(res =>{
  
      this.setState({
        tranlate: res.translations[0].text
      })
      console.log(this.state.tranlate)
    })
    

  }
  render(){
    return(
      <div>
        <textarea
        name = "text"
        value = {this.state.namr}
        onChange  = {this.handleChange}>
       

        </textarea>
        <select  onChange ={this.changeValue} value ={this.state.value}>
        <option value="select">Select</option>
          <option value="BG"  >Bulgarian</option>
          <option value="CS">Czech</option>
          <option value="DA"  >Danish</option>
          <option value="DE">German</option>
          <option value="EL"  >Greek</option>
          <option value="EN-GB">English (British)</option>
          <option value="EN-US"  >English (American)</option>
          <option value="ES">Spanish</option>
          <option value="ET"  >Estonian</option>
          <option value="FI">Finnish</option>
          <option value="FR"  >French</option>
          <option value="HU">Hungarian</option>
          <option value="IT"  >Italian</option>
          <option value="JA">Japanese</option>
          <option value="LA"  >Lithuanian</option>
          <option value="LV">Latvian</option>
          <option value="NL"  >Dutch</option>
          <option value="PL">Polish</option>
          <option value="PT-PT"  >Portuguese </option>
          <option value="PT-BR">Portuguese (Brazilian)</option>
          <option value="RO">Romanian</option>
          <option value="RU">Russian</option>
          <option value="SK"  >Slovak</option>
          <option value="SL">Slovenian</option>
          <option value="SV"  >Swedish</option>
          <option value="ZH">Chinese</option>

        </select>


        <button onClick = {this.handleSubmit}> 
        translate
        </button>
        <span> {this.state.tranlate}</span>
      </div>
    )
  }
}

export default App;
