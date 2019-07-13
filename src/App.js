import React, { Component } from 'react';

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
      order: []
    };
    // I'm going to make the state smaller but I'm gonna keep the various handleSubmit functions to make sure it doesn't mix up a player name and enemy initiative or various other combos
    this.handleEnemySubmit = this.handleEnemySubmit.bind(this);
    this.handleFinalSubmit = this.handleFinalSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handlePlayerSubmit = this.handlePlayerSubmit.bind(this);
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }

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
    })
  };

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
    })
  };

  handleFinalSubmit = event => {
    event.preventDefault();

    console.log(this.state.playerList);
    console.log(this.state.enemyList);
  }

  render() {
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
                name="playerName"
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
          type="submit" className="btn btn-primary">Sign in</button>
        </form>
        <br />
        <button onClick={this.handleFinalSubmit} type="submit" className="btn btn-primary">Sign in</button>
      </div>
    );
  }
}

export default App;
