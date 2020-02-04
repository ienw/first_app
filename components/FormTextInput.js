import React from 'react';
import PropTypes from 'prop-types';
import {Input, Item} from 'native-base';



const FormTextInput = (props) => {
  const {success, error, ...otherProps} = props;
  return (
      <Item success={success} error={error}>
          <Input
              {...otherProps}
          />
      </Item>
  );
};




FormTextInput.propTypes = {
  success: PropTypes.bool,
  error: PropTypes.bool,
};

export default FormTextInput;
