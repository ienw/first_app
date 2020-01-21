import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';


const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/'

const Single = (props) => {
  const {navigation} = props;
  const filename = navigation.state.params.filename;

  return (
    <View style={styles.container}>
      <Text>{navigation.state.params.title}</Text>
      <Image
        style={styles.image}
        source={{uri: mediaURL + filename}}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
  },
  image:{
    height: 300,
    width: 200,
  }
});

export default Single;
