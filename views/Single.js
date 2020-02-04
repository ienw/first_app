import React from 'react';
import {Dimensions} from 'react-native';
import AsyncImage from '../components/AsyncImage';
import {Container, Content, Card, CardItem, Text, Body} from 'native-base';

const deviceHeight = Dimensions.get('window').height;
const mediaURL = 'http://media.mw.metropolia.fi/wbma/uploads/'

const Single = (props) => {
  const {navigation} = props;
  const params = navigation.state.params;
  console.log ("params", params)
  return (
    <Container>
        <Content>
            <Card>
                <CardItem>
                    <Body>
                        <Text>{params.title}</Text>
                        <Text note>by {params.user_id}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <AsyncImage
                        style={{
                            width: '100%',
                            height: deviceHeight / 2,
                        }}
                        spinnerColor='#777'
                        source={{uri: mediaURL + params.filename}}
                    />
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


export default Single;
