import React from 'react';
import {Alert} from 'react-native';
import {isKnownType} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';

const TypeCheckerButton = () => {
  const handlePress = () => {
    const result = isKnownType({
      kind: 'extension',
      value: 'pdf',
    });

    console.log('isKnownType result:', result);

    Alert.alert(
      'PDF type information',
      [
        `Known: ${result.isKnown}`,
        `MIME: ${result.mimeType || 'null'}`,
        `Extension: ${result.preferredFilenameExtension || 'null'}`,
        `UTType: ${result.UTType || 'null'}`,
      ].join('\n'),
    );
  };

  return (
    <DocumentButton
      title="11. Check PDF Type"
      onPress={handlePress}
      variant="secondary"
    />
  );
};

export default TypeCheckerButton;
