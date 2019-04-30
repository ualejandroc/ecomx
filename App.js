import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Font, AppLoading } from "expo";
import { Ionicons } from '@expo/vector-icons';


import Setup from "./src/boot/setup";

export default class App extends React.Component {

  state = {
    fontLoaded: false,
  }

  
  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
      "Roboto_medium": require('./assets/fonts/Roboto-medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ fontLoaded: true });
    console.log(">>>> resultado:"+this.state.fontLoaded)
  }

  render() {
    if(this.state.fontLoaded){
      return <Setup />;
    }else{
      return <Text>Cargando...</Text>
    }
  }
}
