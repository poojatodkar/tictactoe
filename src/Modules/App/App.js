import React from 'react';
import Home from '../Home/Home';
import Setup from '../Setup/Setup';
import TicTacToe from '../TicTacToe/TicTacToe';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import PageNotFound from '../../Common/PageNotFound/PageNotFound';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const game = new TicTacToe();

const routes = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <div>
      <Switch>
        <Route exact path="/" render={route => {
          return <Setup {...route} game={game} />;
        }}
        />
        <Route path="/firstPlayer/:firstPlayer/secondPlayer/:secondPlayer" render={route => {
          return <Home {...route} game={game} />;
        }}
        />
        <Route path="/leaderboard" render={route => {
          return <LeaderBoard {...route} game={game} />;
        }}
        />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  </Router>
);

export default routes;
