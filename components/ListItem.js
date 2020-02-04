import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import {ListItem as BaseListItem, View, Thumbnail, Text, Button, Left, Right, Body} from 'native-base';


const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/'

/*export const styles = StyleSheet.create({
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
});*/

const ListItem = (props) => {
  return (
    <BaseListItem thumbnail
    onPress={
      () => {
        props.navigation.push('Single', {
          filename:props.singleMedia.filename,
          title:props.singleMedia.title,
          description:props.singleMedia.description,
          user_id:props.singleMedia.user_id
        });

      }
    }>
      <Left>
        <Thumbnail
          square
          source={{uri: mediaURL + props.singleMedia.thumbnails.w160}}
        />
      </Left>


      <Body>

        <Text style={{marginLeft:60}}>{props.singleMedia.title}</Text>
        <Text style={{marginLeft:60}}>{props.singleMedia.description}</Text>

      </Body>


      <Right>
          <Button style={{ height:20 }}>
           <Text>View</Text>
          </Button>
      </Right>



    </BaseListItem>
  );
};

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};


export default ListItem;
