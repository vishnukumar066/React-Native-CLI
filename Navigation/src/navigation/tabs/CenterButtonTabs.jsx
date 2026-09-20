import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, User, Search, Handbag, ListChecks } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import HomeScreen from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';
import SearchScreen from '../../screens/SearchScreen';
import OrderScreen from '../../screens/OrderScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import { useState } from 'react';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (iconName, focused, color, size) => {
  const iconSize = focused ? size + 1 : size;
  const strokeWidth = focused ? 2.5 : 2;

  const iconStyle = {
    backgroundColor: focused ? 'yellow' : 'transparent',
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

    // case 'Search':
    //   Icon = Search;
    //   break;

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

// CENTER EXPLORE BUTTON

const CenterTabButton = ({ children, onPress, accessibilityState }) => {
  const focused = accessibilityState?.selected;

  return (
    <View style={styles.centerButtonOuterContainer}>
      <View style={styles.centerButtonContainer}>
        <Pressable
          onPress={onPress}
          style={({ pressed }) => [
            styles.centerButton,

            focused && styles.centerButtonFocused,

            pressed && styles.centerButtonPressed,
          ]}
        >
          {children}
        </Pressable>
      </View>
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

const CenterButtonTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
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
          height: 78,
          paddingTop: 6,
          paddingBottom: 10,
          backgroundColor: 'red',
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
          tabBarLabel: () => null,
          tabBarIcon: () => (
            <Search size={28} color={'#f50000'} strokeWidth={2.5} />
          ),
          tabBarButton: props => <CenterTabButton {...props} />,
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

export default CenterButtonTabs;

const styles = StyleSheet.create({
  centerButtonOuterContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
    marginTop: -80,
  },
  centerButtonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#fecaca',
    borderWidth: 5,
    borderRadius: '100%',
  },

  centerButton: {
    width: 74,
    height: 74,

    borderRadius: '100%',

    backgroundColor: '#fecaca',

    justifyContent: 'center',
    alignItems: 'center',

    elevation: 8,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 6,

    borderWidth: 4,
    borderColor: 'red',
  },

  centerButtonFocused: {
    backgroundColor: '#000000',

    transform: [
      {
        scale: 1.01,
      },
    ],
  },

  centerButtonPressed: {
    transform: [
      {
        scale: 1.02,
      },
    ],
  },
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
