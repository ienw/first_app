import {Dimensions} from 'react-native';
import AsyncImage from '../components/AsyncImage';
import {Container, Content, Card, CardItem, Text, Body} from 'native-base';
import {Video} from 'expo-av';
import PropTypes from 'prop-types';
import {getUser} from '../hooks/APIHooks';
import React, {useState, useEffect} from 'react';

const deviceHeight = Dimensions.get('window').height;
const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/'

const Single = (props) => {
  const {navigation} = props;
  const [owner, setOwner] = useState({});
  const params = navigation.state.params.file;
  console.log("params", params)
  const getOwner = async () => {
      const data = await getUser(params.user_id);
      setOwner(data);
  };
  useEffect(() => {
      getOwner();
  }, [])
  return (
    <Container>
            <Content>
                <Card>
                    <CardItem>
                        <Body>
                            <Text>{params.title}</Text>
                            <Text note>by {owner.username}</Text>
                            {owner.full_name &&
                                <Text note>{owner.full_name}</Text>
                            }
                        </Body>
                    </CardItem>
                    <CardItem cardBody>
                        {params.media_type === 'image' &&
                            <AsyncImage
                                style={{
                                    width: '100%',
                                    height: deviceHeight / 2,
                                }}
                                spinnerColor='#777'
                                source={{uri: mediaURL + params.filename}}
                            />}
                        {params.media_type === 'video' &&
                            <Video
                                source={{uri: mediaURL + params.filename}}
                                rate={1.0}
                                volume={1.0}
                                isMuted={false}
                                resizeMode="cover"
                                shouldPlay
                                isLooping
                                style={{
                                    width: '100%',
                                    height: deviceHeight / 2
                                }}
                            />}
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>{params.description}</Text>
                      </Body>
                    </CardItem>
            </Card>
        </Content>
    </Container>
);
};

Single.propTypes = {
  navigation: PropTypes.object,
  file: PropTypes.object,
};


export default Single;
