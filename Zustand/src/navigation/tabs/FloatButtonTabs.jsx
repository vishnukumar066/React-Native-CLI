import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, User, Search, Handbag, ListChecks } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import HomeScreen from '../../screens/HomeScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import CartScreen from '../../screens/CartScreen';
import SearchScreen from '../../screens/SearchScreen';
import OrderScreen from '../../screens/OrderScreen';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (iconName, focused, color, size) => {
  const iconSize = focused ? size + 1 : size;
  const strokeWidth = focused ? 2.5 : 2;

  const iconStyle = {
    // backgroundColor: focused ? 'yellow' : 'transparent',
    backgroundColor: 'transparent',
    height: 35,
    borderRadius: 20,
    paddingHorizontal: focused ? 20 : 0,
    justifyContent: 'center',
    alignItems: 'center',
  };

  let Icon = null;

  switch (iconName) {
    case 'Home':
      Icon = Home;
      break;

    case 'Cart':
      Icon = Handbag;
      break;

    case 'Search':
      Icon = Search;
      break;

    case 'Orders':
      Icon = ListChecks;
      break;

    case 'Profile':
      Icon = User;
      break;

    default:
      return null;
  }

  return (
    <View style={iconStyle}>
      <Icon size={iconSize} color={color} strokeWidth={strokeWidth} />
    </View>
  );
};

const CustomTabButton = ({ children, onPress, onLongPress, tabName }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <View style={styles.tabButtonContainer}>
      {showTooltip && (
        <View style={styles.tooltip}>
          <Text style={styles.tooltipText}>{tabName}</Text>
        </View>
      )}

      <Pressable
        onPress={onPress}
        onLongPress={() => {
          setShowTooltip(true);
          onLongPress?.();
        }}
        onPressOut={() => {
          setShowTooltip(false);
        }}
        style={styles.tabButton}
      >
        {children}
      </Pressable>
    </View>
  );
};

const FloatButtonTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        sceneStyle: {
          backgroundColor: '#fecaca',
        },
        headerShown: false,
        animation: 'fade',
        tabBarActiveTintColor: '#000000',
        tabBarInactiveTintColor: '#e9e225',

        tabBarIcon: ({ focused, color, size }) =>
          getTabBarIcon(route.name, focused, color, size),

        tabBarLabelStyle: {
          fontSize: 15,
          fontWeight: 500,
          marginTop: 3,
        },

        tabBarStyle: {
          height: 65,
          paddingTop: 2,
          paddingBottom: 2,
          backgroundColor: 'red',
          marginBottom: 25,
          marginHorizontal: 10,
          borderRadius: 40,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: 0.15,
          shadowRadius: 8,
        },
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarButton: props => <CustomTabButton {...props} tabName="Home" />,
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: 'Cart',
          tabBarButton: props => <CustomTabButton {...props} tabName="Cart" />,
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: 'Explore',
          tabBarButton: props => (
            <CustomTabButton {...props} tabName="Explore" />
          ),
        }}
      />

      <Tab.Screen
        name="Orders"
        component={OrderScreen}
        options={{
          title: 'Orders',
          tabBarButton: props => (
            <CustomTabButton {...props} tabName="Orders" />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: 'Profile',
          tabBarButton: props => (
            <CustomTabButton {...props} tabName="Profile" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default FloatButtonTabs;

const styles = StyleSheet.create({
  tabButtonContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  tabButton: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  tooltip: {
    position: 'absolute',
    bottom: 65,

    backgroundColor: '#000',
    paddingHorizontal: 12,
    paddingVertical: 7,

    borderRadius: 8,

    zIndex: 999,
    elevation: 10,
  },

  tooltipText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
  },
});
