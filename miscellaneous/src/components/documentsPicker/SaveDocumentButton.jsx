import React from 'react';
import {Alert} from 'react-native';
import {saveDocuments} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError} from './documentUtils';

const SaveDocumentButton = ({sourceUri, mimeType, fileName}) => {
  const handlePress = async () => {
    if (!sourceUri) {
      Alert.alert(
        'No source document',
        'Pick a document first.',
      );
      return;
    }

    try {
      const [result] = await saveDocuments({
        sourceUris: [sourceUri],
        fileName: fileName || 'MyDocument',
        mimeType: mimeType || 'application/octet-stream',
        copy: true,
      });

      console.log('Save result:', result);

      if (result.error) {
        Alert.alert('Save failed', result.error);
        return;
      }

      Alert.alert(
        'Saved',
        result.name || result.uri,
      );
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="9. Save As..."
      onPress={handlePress}
      variant="secondary"
    />
  );
};

export default SaveDocumentButton;
