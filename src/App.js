import React from 'react';

import { Route, Switch, Link } from 'react-router-dom';
import history from './services/history';

import {ThemeProvider} from 'styled-components';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';

import styled from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

import InsertItem from './components/pages/InsertItem';
import ErrorPage from './components/pages/ErrorPage';

import Body from './components/containers/Body';

class App extends React.Component  {
  state = {
    theme: LightTheme
  };
  render(){
    return (
      <div className="App">
      <ThemeProvider theme={this.state.theme}>
        <h1>ToDo App</h1>
        <Body>
        <Switch history={history} >
            <Route path="/" render={ props => (<InsertItem />) } exact />
            <Route component={ErrorPage} />
        </Switch>
        </Body>
      <GlobalStyle />
      </ThemeProvider>
      </div>
    );
  }
}

export default App;
