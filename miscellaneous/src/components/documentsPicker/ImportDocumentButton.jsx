import React from 'react';
import {Alert} from 'react-native';
import {pick} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError, logDocument} from './documentUtils';

const ImportDocumentButton = ({onPicked}) => {
  const handlePress = async () => {
    try {
      const [file] = await pick({
        mode: 'import',
      });

      logDocument(file);
      onPicked?.(file);

      Alert.alert(
        'Selected',
        file?.name || 'Document selected.',
      );
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="1. Import Single Document"
      onPress={handlePress}
    />
  );
};

export default ImportDocumentButton;
