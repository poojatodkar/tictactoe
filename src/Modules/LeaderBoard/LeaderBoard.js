import React, { Component } from 'react';
import Storage from '../Storage/Storage';
import { Link } from 'react-router-dom'
import './LeaderBoard.scss';

class LeaderBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * @inheritdoc
   */
  componentWillMount() {
    let storage = new Storage().getData();
    this.setState({
      leaderBoard: storage
    });
  }

  clearLeaderBoard() {
    console.log(new Storage())
    let storage =  new Storage().update([]);
    this.setState({
      leaderBoard: storage
    });
  }

  /**
   * Renders winner congratulation message.
   * @private 
   */
  renderWinnerMessage_() {
    let  { winner } = this.props.match.params;

    if (!winner) {
      return (
        <div>
          <Link to="/">New game</Link>
          <span className='clear float-right' onClick={this.clearLeaderBoard.bind(this)}>Clear Board</span>
        </div>
      )
    }

    return (
      <div>
        <p>
          Congratulations, <strong>{winner}</strong>!!!
          Now you are in our leaderboard.
        </p>

        <p>
          Are you ready to <button type="button" onClick={this.props.history.goBack}>
          play again</button> aganst you partner or start a 
          <Link to="/">new game</Link>?
        </p>
      </div>
    );
  }

  render() {
    let leaderBoard = this.state.leaderBoard;
    return (
      <div className="leader-board">
        <h1>Leaderboard</h1>
        {this.renderWinnerMessage_()}
        <ul>
        {leaderBoard && leaderBoard.map((leader, key) => {
          return <li key={key}>{leader}</li>
        })}
        </ul>
      </div>
    );
  }
}

export default LeaderBoard
