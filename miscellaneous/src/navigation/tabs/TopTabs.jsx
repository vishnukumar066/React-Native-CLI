import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text, Pressable, ScrollView, StyleSheet } from 'react-native';

import Tab1Screen from '../../screens/topTab/Tab1Screen';
import Tab2Screen from '../../screens/topTab/Tab2Screen';
import Tab3Screen from '../../screens/topTab/Tab3Screen';
import Tab4Screen from '../../screens/topTab/Tab4Screen';
import Tab5Screen from '../../screens/topTab/Tab5Screen';
import { Home } from 'lucide-react-native';

const Tab = createMaterialTopTabNavigator();

const TopTabs = () => {
  return (
    <Tab.Navigator
      tabBar={props => <CustomTopTabBar {...props} />}
      initialRouteName="Tab1"
      screenOptions={{
        sceneStyle: {
          backgroundColor: '#fecaca',
        },

        //     tabBarScrollEnabled: true,
        //     tabBarStyle: {
        //       backgroundColor: '#F5F6F7',
        //       elevation: 0,
        //       shadowOpacity: 0,
        //       borderBottomWidth: 0,
        //       height: 58,
        //       marginTop: 5,
        //       justifyContent: 'center',
        //     },

        //     tabBarLabelStyle: {
        //       fontSize: 14,
        //       fontWeight: '700',
        //       textTransform: 'none',
        //     },

        //     tabBarActiveTintColor: '#0653F8',
        //     tabBarInactiveTintColor: '#6B7280',

        //     tabBarPressColor: 'transparent',
        //     swipeEnabled: true,
      }}
    >
      <Tab.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          title: 'Overview',
        }}
      />

      <Tab.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          title: 'Products',
        }}
      />

      <Tab.Screen
        name="Tab3"
        component={Tab3Screen}
        options={{
          title: 'Reviews',
        }}
      />

      <Tab.Screen
        name="Tab4"
        component={Tab4Screen}
        options={{
          title: 'Offers',
        }}
      />

      <Tab.Screen
        name="Tab5"
        component={Tab5Screen}
        options={{
          title: 'Details',
        }}
      />

      <Tab.Screen
        name="Tab6"
        component={Tab4Screen}
        options={{
          title: 'Offers',
        }}
      />

      <Tab.Screen
        name="Tab7"
        component={Tab5Screen}
        options={{
          title: 'Detailsnb nbmbnmbmnbm',
        }}
      />
    </Tab.Navigator>
  );
};

export default TopTabs;

const CustomTopTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const label =
            options.title !== undefined ? options.title : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              onPress={onPress}
              onLongPress={onLongPress}
              style={[styles.tab, isFocused && styles.activeTab]}
            >
              <Text style={[styles.label, isFocused && styles.activeLabel]}>
                {label}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: '#fecaca',

    justifyContent: 'center',

    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
  },

  scrollContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
    gap: 6,
  },

  tab: {
    paddingHorizontal: 14,
    paddingVertical: 9,
    backgroundColor: '#d4b2b2',

    borderRadius: 20,

    justifyContent: 'center',
    alignItems: 'center',
  },

  activeTab: {
    backgroundColor: '#da2828',
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#545965',

    textTransform: 'none',
  },

  activeLabel: {
    color: '#000000',
    fontWeight: '900',
  },
});
