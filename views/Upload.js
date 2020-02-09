import React, {useState} from 'react';
import {
  Content,
  Form,
  Button,
  Text,
  Item,
} from 'native-base';
import {
  AsyncStorage,
} from 'react-native';
import PropTypes from 'prop-types';
import {fetchGET, fetchPOST} from '../hooks/APIHooks';
import FormTextInput from '../components/FormTextInput';
import {constants} from 'crypto';


const Upload = (props) => {

  const [image , setImage] = useState(null);
  const getPermissionAsync = async () => {
    if (constants.platform.ios) {
      const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };

useEffect( () =>{
  getPermissionAsync();
}, [] );

const pickImage = async () => {
  const result = await ImagePicker.launchImageLibraryAsync( {
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [4,3],
    quality: 0.3,
    exif: true,
  });
  console.log(result);
}

  return (
      <Content>
        <Form>
          <Item>
            <FormTextInput
              placeholder='Title'
            />
          </Item>
          <Item>
            <FormTextInput
              placeholder='Description'
            />
          </Item>
          <Button full>
            <Text>Select file</Text>
          </Button>
          <Button dark full>
          <Text>Reset form</Text>
        </Button>
          <Button full>
            <Text>Upload</Text>
          </Button>
        </Form>
      </Content>
  );
};

// proptypes here
Upload.propTypes = {
  navigation: PropTypes.object,
};

export default Upload;
