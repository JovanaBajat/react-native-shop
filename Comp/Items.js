import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Button } from 'native-base';
import { List, ListItem, Left, Body, Thumbnail } from 'native-base';


class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemListe : [
        {
          name: "MacBook Air",
          price: 999,
          pic: 'https://www.apple.com/ac/structured-data/images/open_graph_logo.png?201703170823'
        },
        {
          name: "Acer Swift7",
          price: 700,
          pic: './../public/acer.jpg'
        },
        {
          name: "MacBook Pro",
          price: 1200,
          pic: './../public/apple.png'
        },
        {
          name: "ASUS VivoBook",
          price: 670,
          pic: './../public/asus.png'
        },
        {
          name: "Dell latitude",
          price: 950,
          pic: './../public/dell.svg'
        },
      ]
    }
  }

  render() {
    return (
      <View style={styles.border}>
        <Text>Items</Text>
        <View style={styles.display}>
          {this.state.itemListe.map((item, index) => {
            return (
          //   <Button bordered primary key={index} style={styles.container}>
          //     {/* <Icon>{ item.pic }</Icon> */}
          //     <Text style={{color: '#006bff'}}>article: { item.name }, </Text>
          //     <Text style={{color: '#006bff'}}>price: { item.price}</Text>
          // </Button>
          <List key={index}>
            <ListItem avatar>
              <Left>
                <Thumbnail />
              </Left>
              <Body>
                <Text>{ item.name }</Text>
                <Text>{ item.price }</Text>
              </Body>
            </ListItem>
          </List>
        )
          })}
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    width: '100%',
  },

});

export default Items;
