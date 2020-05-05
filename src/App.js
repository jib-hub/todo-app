import React from 'react';

import { Route, Switch } from 'react-router-dom';
import history from './services/history';

import TodoLogo from './img/todo_logo.svg';

import {ThemeProvider} from 'styled-components';
import LightTheme from './theme/light';
import DarkTheme from './theme/dark';
import ThemeSwitcher from './components/common/ThemeSwitcher';

import Heading1 from './components/common/Heading1';

import { GlobalStyle } from './GlobalStyle';

import InsertItem from './components/pages/InsertItem';
import ErrorPage from './components/pages/ErrorPage';

import Body from './components/containers/Body';

window.id = 0;
class App extends React.Component  {
  state = {
    theme: LightTheme,
    data: [],
  }
  handleToggleTheme = () => {
    this.setState({
      theme: this.state.theme.id === 'light' ? DarkTheme : LightTheme
    });
  }
  addTodo = (val, cat) => {
      // Assemble data
      const todo = {text: val, id: window.id++, cat: cat}
      // Update data
      this.state.data.push(todo);
      // Update state
      this.setState({data: this.state.data});
  }
    // Handle remove
  handleRemove = (id) => {
    // Filter all todos except the one to be removed
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    // Update state with filter
    this.setState({data: remainder});
  }
  render(){
    return (
      <div className="App">
      <ThemeProvider theme={this.state.theme}>
        <ThemeSwitcher onClick={this.handleToggleTheme} >
        <div></div><div></div>
        </ThemeSwitcher>
        <Heading1><img src={TodoLogo} alt="Todo Logo" /></Heading1>
        <Body>
        <Switch history={history} >
            <Route path="/" render={ props => (<InsertItem addTodo={this.addTodo} todos={this.state.data}
            remove={this.handleRemove} />) } exact />
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
