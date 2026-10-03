import React from 'react';
import {Alert} from 'react-native';
import {pickDirectory} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError} from './documentUtils';

const DirectoryPickerButton = ({onPicked}) => {
  const handlePress = async () => {
    try {
      const result = await pickDirectory({
        requestLongTermAccess: true,
      });

      console.log('Directory result:', result);
      onPicked?.(result);

      Alert.alert(
        'Directory selected',
        result.uri,
      );
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="6. Pick Directory + Long-Term Access"
      onPress={handlePress}
    />
  );
};

export default DirectoryPickerButton;
