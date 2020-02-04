import React, {useContext, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext'
import {getAllMedia} from '../hooks/APIHooks';
import {List as BaseList} from 'native-base';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [data] = getAllMedia();
  console.log(props.navigation, data);
  setMedia(data);
  return (
    <BaseList
      dataArray={media}
      keyExtractor={(item, index) => index.toString()}
      renderRow={
        (item) => <ListItem
          navigation={props.navigation}
          singleMedia={item}
        />
      }/>
  )};

export default List;
