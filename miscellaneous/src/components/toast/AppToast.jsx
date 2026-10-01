import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Info,
} from 'lucide-react-native';

const toastConfig = {
  success: {
    icon: CheckCircle2,
    iconColor: '#16A34A',
    accentColor: '#22C55E',
  },

  error: {
    icon: XCircle,
    iconColor: '#DC2626',
    accentColor: '#EF4444',
  },

  warning: {
    icon: AlertTriangle,
    iconColor: '#D97706',
    accentColor: '#F59E0B',
  },

  info: {
    icon: Info,
    iconColor: '#2563EB',
    accentColor: '#3B82F6',
  },
};

function AppToast({ type = 'success', text1, text2 }) {
  const config = toastConfig[type] || toastConfig.info;

  const Icon = config.icon;

  return (
    <View style={styles.wrapper}>
      <View
        style={[
          styles.accent,
          {
            backgroundColor: config.accentColor,
          },
        ]}
      />

      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Icon size={24} color={config.iconColor} strokeWidth={2.5} />
        </View>

        <View style={styles.textContainer}>
          {text1 && <Text style={styles.title}>{text1}</Text>}

          {text2 && (
            <Text style={styles.message} numberOfLines={2}>
              {text2}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '92%',
    minHeight: 70,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,

    flexDirection: 'row',
    alignItems: 'center',

    overflow: 'hidden',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.15,
    shadowRadius: 10,

    elevation: 6,
  },

  accent: {
    width: 5,
    height: '100%',
  },

  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 14,
  },

  iconContainer: {
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    fontSize: 15,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 3,
  },

  message: {
    fontSize: 13,
    lineHeight: 18,
    color: '#6B7280',
    fontWeight: '500',
  },
});

export default AppToast;
