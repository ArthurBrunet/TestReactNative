import React, {Component} from 'react';
import {Text, TextInput, View, Button} from 'react-native';
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
    return {
        favoritesFilm: state.favoritesFilm
    }
}


class Home extends Component {
    constructor(props) {
        super(props)
    }



  render() {
    return (
      <View>
          <Text>Liste des films</Text>
          {
              this.props.favoritesFilm.map( (item) => {
                  return (
                      <Text>{ item }</Text>
                  )
              })
          }
      </View>
    );
  }
}


export default connect(mapStateToProps)(Home)
