import React from 'react';
import {Alert} from 'react-native';
import {
  pick,
  types,
} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError, logDocument} from './documentUtils';

const OpenOnceDocumentButton = ({onPicked}) => {
  const handlePress = async () => {
    try {
      const [file] = await pick({
        mode: 'open',
        requestLongTermAccess: false,
        type: [types.pdf],
      });

      logDocument(file);
      onPicked?.(file);

      Alert.alert(
        'Opened',
        `${file?.name || 'PDF'} selected.\nAccess lasts until the app terminates.`,
      );
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="4. Open PDF (Temporary Access)"
      onPress={handlePress}
    />
  );
};

export default OpenOnceDocumentButton;
