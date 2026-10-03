import React from 'react';
import {Alert, Platform} from 'react-native';
import {
  releaseLongTermAccess,
  releaseSecureAccess,
} from '@react-native-documents/picker';

import DocumentButton from './DocumentButton';

const ReleaseAccessButton = ({uri}) => {
  const handlePress = async () => {
    if (!uri) {
      Alert.alert(
        'No URI',
        'First select a long-term-access document.',
      );
      return;
    }

    try {
      if (Platform.OS === 'android') {
        const result = await releaseLongTermAccess([uri]);
        console.log('Android release result:', result);
      } else if (Platform.OS === 'ios') {
        await releaseSecureAccess([uri]);
      }

      Alert.alert(
        'Access released',
        'The long-term/secure document access was released.',
      );
    } catch (error) {
      console.error('Release error:', error);

      Alert.alert(
        'Release failed',
        error?.message || 'Could not release document access.',
      );
    }
  };

  return (
    <DocumentButton
      title="12. Release Document Access"
      onPress={handlePress}
      variant="danger"
    />
  );
};

export default ReleaseAccessButton;
