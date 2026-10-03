import React from 'react';
import {Alert} from 'react-native';
import {viewDocument} from '@react-native-documents/viewer';

import DocumentButton from './DocumentButton';

const ViewDocumentButton = ({
  uri,
  mimeType,
  bookmark,
}) => {
  const handlePress = async () => {
    try {
      if (bookmark) {
        await viewDocument({bookmark});
        return;
      }

      if (!uri) {
        Alert.alert(
          'No document',
          'Pick or create a local copy first.',
        );
        return;
      }

      await viewDocument({
        uri,
        mimeType: mimeType || 'application/octet-stream',
      });
    } catch (error) {
      console.error('Viewer error:', error);

      Alert.alert(
        'Unable to open',
        error?.message ||
          'No application on this device can open the document.',
      );
    }
  };

  return (
    <DocumentButton
      title="10. View Selected Document"
      onPress={handlePress}
      variant="secondary"
    />
  );
};

export default ViewDocumentButton;
