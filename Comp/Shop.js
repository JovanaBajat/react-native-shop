import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


// components
import Items from './Items';
import Basket from './Basket';

class Shop extends Component {

  render() {
    return (
      <View style={styles.border}>
        <Text style={{paddingBottom: 10}}>SHOP</Text>
        <Items />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  border: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3,
    padding: 30,
  },
});

export default Shop;
