import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import {styles} from '../App';

const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/'

const ListItem = (props) => {
  return (
    <TouchableOpacity style={styles.row}
    onPress={
      () => {
        props.navigation.push('Single', {
          filename:props.singleMedia.filename,
          title:props.singleMedia.title
        });

      }
    }>
      <Image
        style={styles.image}
        source={{uri: mediaURL + props.singleMedia.filename}}
      />



      <View style={styles.text}>
        <Text>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};


export default ListItem;
