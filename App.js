import React, {Component} from 'react';
import Routes from './app/Routes';
import {I18nManager} from 'react-native';

class App extends Component {
  componentDidMount() {
    I18nManager.forceRTL(true);
  }
  render() {
    return <Routes />;
  }
}

export default App;
