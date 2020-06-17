import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class Parameter extends Component {

    render() {
        return (
            <View>
                <Text>Hello, I am test component Parameter !</Text>
                <Button
                    title="Go to Home... again"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}
