import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import RNSpeedometer from 'react-native-speedometer'

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
        <Text>Hello, I am test component HOME !</Text>
          <RNSpeedometer value={this.state.valueInput} size={300}/>
      </View>
    );
  }
}
