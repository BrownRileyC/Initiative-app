import React, { Component } from 'react';

class PlayerEntry extends Component {
    render() {
        return (
            <div>
                <h1>Player Entry</h1>
                <form>
                    <div className="row justify-content-center">
                        <input
                            value={this.props.name}
                            onChange={this.props.handleChange}
                            name="playerName"
                            type="text"
                            className="form-control" placeholder="Player Name" />
                    </div>
                    <div className="row justify-content-center">
                        <input
                            value={this.props.initiative}
                            onChange={this.props.handleChange}
                            name="playerInitiative"
                            type="number"
                            className="form-control" placeholder="Initiative Score" />
                    </div>
                    <div className="row justify-content-center">
                        <button onClick={this.props.handleSubmit} type="submit" className="btn btn-primary">Add Player</button>
                    </div>
                </form>
            </div>
        )

    }
};

export default PlayerEntry;