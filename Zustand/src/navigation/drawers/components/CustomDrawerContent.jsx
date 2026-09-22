import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

const CustomDrawerContent = props => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Drawer Header */}
      <View style={styles.header}>
        {/* Logo */}
        <View style={styles.logo}>
          <Text style={styles.logoText}>V</Text>
        </View>

        {/* App Information */}
        <View style={styles.headerText}>
          <Text style={styles.appName}>My Application</Text>

          <Text style={styles.subtitle}>Welcome back!</Text>
        </View>
      </View>

      {/* Drawer Items */}
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={styles.scrollContent}
      >
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      {/* Bottom Footer */}
      <View style={styles.footer}>
        <Text style={styles.version}>Version 1.0.0</Text>
      </View>
    </SafeAreaView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FFFFFF',
  },

  header: {
    height: 120,

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,

    // backgroundColor: '#e13838',

    borderBottomWidth: 1,
    borderBottomColor: '#bb5959',
  },

  logo: {
    width: 52,
    height: 52,

    borderRadius: 16,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#d75928',
  },

  logoText: {
    fontSize: 24,
    fontWeight: '800',
    color: '#040404',
  },

  headerText: {
    marginLeft: 14,
  },

  appName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
  },

  subtitle: {
    marginTop: 4,

    fontSize: 13,
    fontWeight: '500',

    color: '#45484f',
  },

  scrollContent: {
    paddingTop: 12,
  },

  // =========================
  // FOOTER
  // =========================

  footer: {
    paddingVertical: 16,
    alignItems: 'center',

    borderTopWidth: 1,
    borderTopColor: '#d22f2f',
  },

  version: {
    fontSize: 12,
    color: '#2e3033',
  },
});
