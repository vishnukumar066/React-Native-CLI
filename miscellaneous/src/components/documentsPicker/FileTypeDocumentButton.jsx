import React from 'react';
import {Alert} from 'react-native';
import {
  pick,
  types,
} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError, logDocument} from './documentUtils';

const FileTypeDocumentButton = ({onPicked}) => {
  const handlePress = async () => {
    try {
      const files = await pick({
        mode: 'import',
        allowMultiSelection: true,
        type: [types.pdf, types.docx],
      });

      files.forEach(logDocument);

      // Android document providers may ignore requested types.
      const invalid = files.filter(file => !file.hasRequestedType);

      if (invalid.length > 0) {
        Alert.alert(
          'File type mismatch',
          'One or more selected files did not match PDF/DOCX.',
        );
        return;
      }

      onPicked?.(files);
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="3. Pick PDF / DOCX Only"
      onPress={handlePress}
    />
  );
};

export default FileTypeDocumentButton;
