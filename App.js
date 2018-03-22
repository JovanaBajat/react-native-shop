import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

// compotents

import Shop from './Comp/Shop';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Image source={require('./laptop1.jpg')} style={{width: '100%', height: 200}} />
        <Shop />
      </View>
    );
  }
}
