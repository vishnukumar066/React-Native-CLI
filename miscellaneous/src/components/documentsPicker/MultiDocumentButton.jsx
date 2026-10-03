import React from 'react';
import {Alert} from 'react-native';
import {pick} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError, logDocument} from './documentUtils';

const MultiDocumentButton = ({onPicked}) => {
  const handlePress = async () => {
    try {
      const files = await pick({
        mode: 'import',
        allowMultiSelection: true,
      });

      files.forEach(logDocument);
      onPicked?.(files);

      Alert.alert(
        'Selected',
        `${files.length} document(s) selected.`,
      );
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="2. Import Multiple Documents"
      onPress={handlePress}
    />
  );
};

export default MultiDocumentButton;
