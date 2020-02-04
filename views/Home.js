import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import List from '../components/List';





const Home = (props) => {
  const {navigation} = props;
  return (
    <View >
      <List navigation={navigation}></List>
    </View>
  );
};



export default Home;
