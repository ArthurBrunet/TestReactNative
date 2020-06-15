import React, {Component} from 'react';
import Home from './components/Home.js';
import {View, Text} from 'react-native';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0
    }
  }

  render() {
    return (
      <View>
        <Home valueInput={this.state.value}/>
        <Text>
          {this.state.value}
        </Text>
      </View>
    );
  }
}
