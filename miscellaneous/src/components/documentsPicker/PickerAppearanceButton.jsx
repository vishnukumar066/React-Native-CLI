import React from 'react';
import {Alert, Platform} from 'react-native';
import {pick} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';
import {handleDocumentError} from './documentUtils';

const PickerAppearanceButton = () => {
  const handlePress = async () => {
    if (Platform.OS !== 'ios') {
      Alert.alert(
        'iOS only',
        'presentationStyle and transitionStyle are iOS-only picker options.',
      );
      return;
    }

    try {
      await pick({
        mode: 'import',
        presentationStyle: 'fullScreen',
        transitionStyle: 'coverVertical',
      });
    } catch (error) {
      handleDocumentError(error);
    }
  };

  return (
    <DocumentButton
      title="13. iOS Picker Presentation Options"
      onPress={handlePress}
      variant="secondary"
    />
  );
};

export default PickerAppearanceButton;
