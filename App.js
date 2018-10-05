import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Constants } from 'expo';

import InitialARScene from './js/MainScene';
//var InitialARScene = require('./js/MainScene.js');

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <InitialARScene />
        <Text>test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  }

});
