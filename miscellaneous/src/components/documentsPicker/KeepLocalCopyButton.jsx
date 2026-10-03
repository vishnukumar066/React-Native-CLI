import React from 'react';
import {Alert} from 'react-native';
import {
  keepLocalCopy,
  pick,
} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError} from './documentUtils';

const KeepLocalCopyButton = ({onLocalCopy}) => {
  const handlePress = async () => {
    try {
      const [file] = await pick({
        mode: 'import',
      });

      const [result] = await keepLocalCopy({
        files: [
          {
            uri: file.uri,
            fileName: file.name || 'document',
          },
        ],
        destination: 'documentDirectory',
      });

      console.log('Local copy:', result);

      if (result.status === 'success') {
        onLocalCopy?.(result.localUri);

        Alert.alert(
          'Local copy created',
          result.localUri,
        );
      } else {
        Alert.alert(
          'Copy failed',
          result.copyError,
        );
      }
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="7. Pick + Keep Local Copy"
      onPress={handlePress}
    />
  );
};

export default KeepLocalCopyButton;
