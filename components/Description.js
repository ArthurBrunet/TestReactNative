import React, {Component} from 'react';
import {Button, Text, View} from 'react-native';

export default class Description extends Component {

    render() {
        return (
            <View>
                <Text>Hello, I am test component DESCRIPTION !</Text>
                <Button
                    title="Go to Details... again"
                    onPress={() => this.props.navigation.navigate('Parameter')}
                />
            </View>
        );
    }
}
