import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        valueInput: props.valueInput
    }
  }

  render() {
    return (
      <View>
        <TextInput value={this.state.valueInput} onChangeText={(text) => this.setState({valueInput : text})}/>
        <Button onPress={() => {console.log(this.state.valueInput)}} title="Le Button test" />
          <Button
              title="Go to Details... again"
              onPress={() => this.props.navigation.navigate('Details')}
          />
        <Text>Hello, I am test component HOME !</Text>
      </View>
    );
  }
}
