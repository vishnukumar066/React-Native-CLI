import {Alert} from 'react-native';
import {
  errorCodes,
  isErrorWithCode,
} from '@react-native-documents/picker';

export const handleDocumentError = error => {
  console.error('Document operation error:', error);

  if (!isErrorWithCode(error)) {
    Alert.alert(
      'Document Error',
      error?.message || 'Something went wrong.',
    );
    return;
  }

  switch (error.code) {
    case errorCodes.OPERATION_CANCELED:
      // Cancellation is an expected user action.
      return;

    case errorCodes.IN_PROGRESS:
      Alert.alert(
        'Operation in progress',
        'Another document operation is already running.',
      );
      return;

    case errorCodes.UNABLE_TO_OPEN_FILE_TYPE:
      Alert.alert(
        'Unsupported file',
        'The device cannot open this file type.',
      );
      return;

    case errorCodes.NULL_PRESENTER:
      Alert.alert(
        'Presentation error',
        'The document picker could not be presented.',
      );
      return;

    default:
      Alert.alert(
        'Document Error',
        error.message || 'Unknown document error.',
      );
  }
};

export const formatFileSize = bytes => {
  if (bytes == null) return 'Unknown';
  if (bytes === 0) return '0 B';

  const units = ['B', 'KB', 'MB', 'GB'];
  const index = Math.min(
    Math.floor(Math.log(bytes) / Math.log(1024)),
    units.length - 1,
  );

  return `${(bytes / 1024 ** index).toFixed(2)} ${units[index]}`;
};

export const logDocument = file => {
  console.log('========== DOCUMENT ==========');
  console.log('Name:', file?.name);
  console.log('URI:', file?.uri);
  console.log('Size:', formatFileSize(file?.size));
  console.log('MIME:', file?.type);
  console.log('Native type:', file?.nativeType);
  console.log('Requested type matched:', file?.hasRequestedType);
  console.log('Virtual:', file?.isVirtual);
  console.log('Convertible:', file?.convertibleToMimeTypes);
  console.log('Metadata error:', file?.error);
  console.log('================================');
};
