import React, { Component } from 'react';
import Card from './initiativeCard';

class App extends Component {


  // Here I will probably reduce the number of state elements, likely only need one list that I add actors to regardless of enemy or player
  constructor(props) {
    super(props);
    this.state = {
      playerName: "",
      playerInitiative: 0,
      enemyName: "",
      enemyInitiative: 0,
      enemyNumber: 0,
      playerList: [],
      enemyList: [],
      order: [],
      started: false
    };
    // I'm going to make the state smaller but I'm gonna keep the various handleSubmit functions to make sure it doesn't mix up a player name and enemy initiative or various other combos
    this.handleEnemySubmit = this.handleEnemySubmit.bind(this);
    this.handleFinalSubmit = this.handleFinalSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
  };

  // this simply grabs the 'value' of the text box with each event and updates the state for that
  handleInputChange = event => {
    const { name, value } = event.target;
    if (name === "playerInitiative" || name === "enemyInitiative") {
      let newValue = parseInt(value);
      this.setState({
        [name]: newValue
      })
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  // Here we create a new object and push it onto a newPlayerList object then set state and reset the text boxes

  handlePlayerSubmit = event => {
    event.preventDefault();
    let player = {
      name: this.state.playerName,
      initiative: this.state.playerInitiative
    };
    let newPlayerList = this.state.playerList;

    newPlayerList.push(player);

    this.setState({
      playerList: newPlayerList,
      playerName: "",
      playerInitiative: 0
    });

    // Here is where I need to add the code to create the initiative Box for the 'playerlist' as it gets made
    // In those boxes the user can see the values they've put in and would be able to alter them if needed.
  };

  // Same deal with the handle player submit.  Creates the object to store in the state for the enemy
  handleEnemySubmit = event => {
    event.preventDefault();
    let enemy = {
      name: this.state.enemyName,
      initiative: this.state.enemyInitiative
    };
    let newEnemyList = this.state.enemyList;

    newEnemyList.push(enemy);

    this.setState({
      enemyList: newEnemyList,
      enemyName: "",
      enemyInitiative: 0
    });

    // Again will add a portion to create a card to show what has been submitted
  };

  // This will eventually minimize the UI for adding actors, this will also organize the overall list by initiative order and display it on screen
  handleFinalSubmit = event => {
    event.preventDefault();

    console.log('Handle Final Started');
    let order = [];

    for (let i = 0; i < this.state.enemyList.length; i++) {
      order.push(this.state.enemyList[i]);
    }

    for (let i = 0; i < this.state.playerList.length; i++) {
      order.push(this.state.playerList[i]);
    }

    let newOrder = order.sort((obj1, obj2) => (obj2.initiative - obj1.initiative));

    this.setState({
      order: newOrder,
      started: true
    });

    console.log(order);
    console.log(newOrder);
    console.log(this.state.playerList);
    console.log(this.state.enemyList);
  }

  render() {
    if (this.state.started) {
      return (
        <div>
          {this.state.order.map((item, index) => (
            <Card key={index} name={item.name} initiative={item.initiative} />
          ))}
        </div>
      )
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <p>
              Add your characters and your enemies below!
        </p>
          </header>
          <h1>Player Entry</h1>
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  value={this.state.playerName}
                  onChange={this.handleInputChange}
                  name="playerName"
                  type="text"
                  className="form-control" placeholder="Player Name" />
              </div>
              <div className="col-6">
                <input
                  value={this.state.playerInitiative}
                  onChange={this.handleInputChange}
                  name="playerInitiative"
                  type="number"
                  className="form-control" placeholder="Initiative Score" />
              </div>
            </div>
            <button onClick={this.handlePlayerSubmit} type="submit" className="btn btn-primary">Add Player</button>
          </form>
          <h1>Enemy Entry</h1>
          <form>
            <div className="row">
              <div className="col-6">
                <input
                  value={this.state.enemyName}
                  onChange={this.handleInputChange}
                  name="enemyName"
                  type="text"
                  className="form-control" placeholder="Enemy" />
              </div>
              <div className="col-6">
                <input
                  value={this.state.enemyInitiative}
                  onChange={this.handleInputChange}
                  name="enemyInitiative" type="number" className="form-control" placeholder="Initiative Score" />
              </div>
            </div>
            <button onClick={this.handleEnemySubmit}
              type="submit" className="btn btn-primary">Add Enemy</button>
          </form>
          <br />
          <button onClick={this.handleFinalSubmit} type="submit" className="btn btn-primary">Begin</button>
        </div>
      );
    }
  }
}

export default App;
