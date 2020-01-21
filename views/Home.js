import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import List from '../components/List';





const Home = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <List navigation={navigation}></List>
    </View>
  );
};

export const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    padding: 10,
  },
  image:{
    flex: 1,
    height: '150px',
    width: 'auto',
  },
  text:{
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5
  },
});

export default Home;
