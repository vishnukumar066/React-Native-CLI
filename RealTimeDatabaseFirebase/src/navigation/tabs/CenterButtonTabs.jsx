import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, User, Search, Handbag, ListChecks } from 'lucide-react-native';
import { Pressable, Text, View } from 'react-native';
import { useState } from 'react';

import HomeScreen from '../../screens/HomeScreen';
import CartScreen from '../../screens/CartScreen';
import SearchScreen from '../../screens/SearchScreen';
import OrderScreen from '../../screens/OrderScreen';
import ProfileScreen from '../../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const getTabBarIcon = (iconName, focused, color, size) => {
  const iconSize = focused ? size + 1 : size;
  const strokeWidth = focused ? 2.5 : 2;

  let Icon = null;

  switch (iconName) {
    case 'Home':
      Icon = Home;
      break;

    case 'Cart':
      Icon = Handbag;
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
    <View
      className={`h-[35px] items-center justify-center rounded-[20px] ${
        focused ? 'bg-yellow-400 px-[20px]' : 'bg-transparent px-0'
      }`}
    >
      <Icon size={iconSize} color={color} strokeWidth={strokeWidth} />
    </View>
  );
};

// CENTER EXPLORE BUTTON

const CenterTabButton = ({ children, onPress, accessibilityState }) => {
  const focused = accessibilityState?.selected;

  return (
    <View className="flex-1 items-center justify-center p-0 -mt-[80px]">
      <View className="items-center justify-center rounded-[100%] border-[5px] border-[#fecaca]">
        <Pressable
          onPress={onPress}
          className={`h-[64px] w-[64px] items-center justify-center rounded-[100%] border-[4px] border-red-500 ${
            focused ? 'bg-black scale-[1.01]' : 'bg-[#fecaca]'
          }`}
          style={{
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.25,
            shadowRadius: 6,
          }}
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
    <View className="relative flex-1 items-center justify-center">
      {showTooltip && (
        <View className="absolute bottom-[65px] z-[999] rounded-[8px] bg-black px-[12px] py-[7px]">
          <Text className="text-[12px] font-medium text-white">{tabName}</Text>
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
        className="w-full flex-1 items-center justify-center"
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
          fontWeight: '500',
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
            <Search size={28} color="#f50000" strokeWidth={2.5} />
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
