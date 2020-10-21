import React from 'react';
import Title from './components/Title';
import Header from './components/Header';
import InputList from './components/InputList';
import SubmitInput from './components/SubmitInput';
import ItemPicker from './components/ItemPicker';
// import InputItem from './components/InputItem';


class App extends React.Component {
  state = {
    items: [],
    chosenItem: null,
    error: null
  };

  deleteItem = (index) => {
    const newArray = [...this.state.items];
    newArray.splice(index, 1);
    this.setState({items: newArray});
    console.log('delete!');
  }

  submitItem = item => {
    this.setState({items: [...this.state.items, item]});
  }

  randomizeItem = () => {
    if(!this.state.items.length){
      this.setState({...this.state, error: "You have not added any items"})
      return
    }
    this.setState({...this.state, error: null})
    const generateRandomNumber = (range) => Math.floor(Math.random() * range);
    const arrIndex = generateRandomNumber(this.state.items.length);
    this.setState({chosenItem: this.state.items[arrIndex]});
  }

  render() {
    return ( 
      <div>
        <Title title={"Option Randomizer"} />
        <div className="wrapper">
          <div>
            <div className="grid-container">
            <div className="frame">
              <Header numInputs={this.state.items.length} />
              <InputList items={this.state.items} onDelete={this.deleteItem} />
              <SubmitInput onFormSubmit={this.submitItem} />
            </div>
            <div className="align-grid-item">
            <ItemPicker randomizeItem={this.randomizeItem} error={this.state.error} />
            </div>
            <div className="random-item">
              {this.state.chosenItem}
            </div>
          </div>
          </div>
        </div>

      </div>
    );
  }
}


export default App;
