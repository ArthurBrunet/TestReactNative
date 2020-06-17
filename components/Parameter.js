import React, {Component} from 'react';
import {Button, Text, TextInput, View} from 'react-native';
import { connect } from 'react-redux'


const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}
class Parameter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            film: 'film'
        }
    }


    _AddParameter() {
        const action = { type: "TOGGLE_FAVORITE" , value: this.state.film};
        this.props.dispatch(action);
    }


    render() {
        console.log(this.props)
        return (
            <View>
                <TextInput value={this.state.film} onChangeText={(text) => this.setState({film : text})}/>
                <Button
                    title="Enregistrer"
                    onPress={() => this._AddParameter()}
                />

                <Button
                    title="Go to Home... again"
                    onPress={() => this.props.navigation.navigate('Home')}
                />
            </View>
        );
    }
}

export default connect(mapStateToProps)(Parameter)
