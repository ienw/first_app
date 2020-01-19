import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import List from './components/List';
import {MediaProvider} from './contexts/MediaContext';




const App = () => {
  return (
    <MediaProvider>
      <List/>
    </MediaProvider>
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

export default App;
