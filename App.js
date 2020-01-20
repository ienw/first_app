import React from 'react';
import { StyleSheet, Text, View, FlatList,StatusBar, TouchableOpacity, Image } from 'react-native';
import List from './components/List';


const mediaArray = [
  {
    'key': '0',
    'title': 'Boi',
    'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
    'thumbnails': {
      w160: 'http://placekitten.com/160/161',
    },
    'filename': 'http://placekitten.com/2048/1920',
  },
  {
    'key': '1',
    'title': 'Lilipop',
    'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/162',
    },
    'filename': 'http://placekitten.com/2041/1922',
  },
  {
    'key': '2',
    'title': 'Meow',
    'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
    'thumbnails': {
      w160: 'http://placekitten.com/160/163',
    },
    'filename': 'http://placekitten.com/2039/1920',
  },
];

const App = () => {
  return (
    <View style={styles.container}>
      {//<StatusBar backgroundColor="#8ccb62" barStyle="light-content"></StatusBar>
      }
      <Text style={styles.headerText}>Hey there!</Text>
      <Image style={styles.header} source={require('./assets/cat6.jpg')}></Image>
      <List mediaArray={mediaArray} />

    </View>
  );
 };

export const styles = StyleSheet.create({
  title:{
    fontWeight: 'bold',
    color: 'brown',
    marginBottom: 10,
    fontSize: 20,
  },
  headerText: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 30,
    fontWeight: 'bold',
    backgroundColor: 'lightpink',
    borderRadius: 10,
    padding: 5,
    color: 'mediumvioletred'
  },
  header:{
    flex:1,
    height: 300,
    width: "100%"
  },
  row:{
    flexDirection: 'row',
    padding: 20,
    backgroundColor: 'rgba(221,160,221, 0.3)',
    margin: 5
  },
  image:{
    flex: 1,
    maxWidth: '120px',
    height: '120px',
    margin: '0 10px',
    borderRadius: '50%',
  },
  text:{
    flex: 1,
    marginLeft: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
