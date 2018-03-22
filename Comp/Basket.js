import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';


class Basket extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>BASKET</Text>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: 'black',
    borderWidth: 3
  },
});

export default Basket;
