import React from 'react';
import {Alert} from 'react-native';
import {
  keepLocalCopy,
  pick,
} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError} from './documentUtils';

const VirtualFileButton = ({onLocalCopy}) => {
  const handlePress = async () => {
    try {
      const [file] = await pick({
        mode: 'import',
        allowVirtualFiles: true,
      });

      console.log('Virtual file response:', file);

      if (!file.isVirtual) {
        Alert.alert(
          'Normal file',
          'The selected file is not a virtual Android file.',
        );
        return;
      }

      const target = file.convertibleToMimeTypes?.[0];

      if (!target) {
        Alert.alert(
          'Cannot convert',
          'The provider did not expose a convertible MIME type.',
        );
        return;
      }

      const extension = target.extension || 'file';
      const fileName = `${file.name || 'document'}.${extension}`;

      const [result] = await keepLocalCopy({
        files: [
          {
            uri: file.uri,
            fileName,
            convertVirtualFileToType: target.mimeType,
          },
        ],
        destination: 'cachesDirectory',
      });

      console.log('Virtual conversion result:', result);

      if (result.status === 'success') {
        onLocalCopy?.(result.localUri);

        Alert.alert(
          'Virtual file converted',
          result.localUri,
        );
      } else {
        Alert.alert(
          'Conversion failed',
          result.copyError,
        );
      }
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="8. Pick Virtual File / Google Drive"
      onPress={handlePress}
    />
  );
};

export default VirtualFileButton;
