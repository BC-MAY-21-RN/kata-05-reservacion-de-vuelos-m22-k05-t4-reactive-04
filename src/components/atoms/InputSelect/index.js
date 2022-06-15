import React from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import SelectStyles from './SelectStyles';

const InputSelect = props => {
  return (
    <SelectDropdown
      buttonStyle={SelectStyles.buttonDrop}
      dropdownStyle={SelectStyles.dropdown}
      defaultButtonText="Select location"
      buttonTextStyle={SelectStyles.textButton}
      data={props.data}
      onSelect={props.onSelected}
      buttonTextAfterSelection={(selectedItem, index) => {
        return selectedItem;
      }}
      rowTextForSelection={(item, index) => {
        return item;
      }}
    />
  );
};

export default InputSelect;
