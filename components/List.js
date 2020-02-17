import React, {useContext, useEffect, useState} from 'react';
import ListItem from './ListItem';
import {MediaContext} from '../contexts/MediaContext'
import {AsyncStorage, ScrollView } from 'react-native';
import {NavigationEvents} from 'react-navigation';
import {
  List as BaseList, Spinner
} from 'native-base';
import {getAllMedia, getUserMedia} from '../hooks/APIHooks';

const List = (props) => {
  const [media, setMedia] = useContext(MediaContext);
  const [loading, setLoading] = useState(true);

  const getMedia = async (mode) => {
      try {
          let data = [];
          if (mode === 'all') {
              data = await getAllMedia();
          } else {
              const token = await AsyncStorage.getItem('userToken');
              data = await getUserMedia(token);
          }
          setMedia(data.reverse());
          setLoading(false);
      } catch (e) {
          console.log(e.message);
      }
  };

  useEffect(() => {
      getMedia(props.mode);
  }, []);

  return (
      <ScrollView>
          {loading ? (
              <Spinner />
          ) : (
                  <BaseList
                      dataArray={media}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({item}) => <ListItem
                          navigation={props.navigation}
                          singleMedia={item}
                          mode={props.mode}
                      />}
                  />
              )}
          <NavigationEvents onDidBlur={() => {
              if (props.mode !== 'all') {
                  getMedia('all');
              }
          }} />
      </ScrollView>
  );
};

export default List;
