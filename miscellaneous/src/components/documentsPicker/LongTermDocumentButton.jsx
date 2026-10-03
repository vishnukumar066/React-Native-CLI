import React from 'react';
import {Alert} from 'react-native';
import {
  pick,
  types,
} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError, logDocument} from './documentUtils';

const LongTermDocumentButton = ({
  onPicked,
  onBookmark,
}) => {
  const handlePress = async () => {
    try {
      const file = await pick({
        mode: 'open',
        requestLongTermAccess: true,
        type: [types.pdf],
      }).then(results => results[0]);

      logDocument(file);
      onPicked?.(file);

      if (file.bookmarkStatus === 'success') {
        onBookmark?.(file.bookmark);

        Alert.alert(
          'Long-term access granted',
          `Bookmark created for ${file.name || 'document'}.`,
        );
      } else {
        Alert.alert(
          'Access warning',
          file.bookmarkError || 'Long-term access was not granted.',
        );
      }
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="5. Open PDF + Long-Term Access"
      onPress={handlePress}
    />
  );
};

export default LongTermDocumentButton;
