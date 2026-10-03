import React from 'react';
import {Pressable, Text} from 'react-native';

const DocumentButton = ({
  title,
  onPress,
  disabled = false,
  variant = 'primary',
}) => {
  const variantClass =
    variant === 'danger'
      ? 'bg-red-600'
      : variant === 'secondary'
        ? 'bg-slate-600'
        : 'bg-blue-600';

  return (
    <Pressable
      disabled={disabled}
      onPress={onPress}
      className={`mb-3 min-h-12 items-center justify-center rounded-xl px-4 py-3 ${variantClass} ${
        disabled ? 'opacity-50' : ''
      }`}
    >
      {({pressed}) => (
        <Text
          className={`text-base font-semibold text-white ${
            pressed ? 'opacity-70' : ''
          }`}
        >
          {title}
        </Text>
      )}
    </Pressable>
  );
};

export default DocumentButton;
