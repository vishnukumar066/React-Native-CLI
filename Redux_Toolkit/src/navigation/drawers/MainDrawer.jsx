import { createDrawerNavigator } from '@react-navigation/drawer';

import {
  Home,
  LayoutDashboard,
  Bell,
  Users,
  History,
  Download,
  CircleHelp,
  Info,
  PanelsTopLeft,
  Circle,
} from 'lucide-react-native';

import DashboardScreen from '../../screens/DashboardScreen';
import NotificationScreen from '../../screens/NotificationScreen';
import ContactScreen from '../../screens/ContactScreen';
import HistoryScreen from '../../screens/HistoryScreen';
import DownloadScreen from '../../screens/DownloadScreen';
import HelpScreen from '../../screens/HelpScreen';
import AboutScreen from '../../screens/AboutScreen';

import MainTabs from '../tabs/MainTabs';
import CenterButtonTabs from '../tabs/CenterButtonTabs';
import FloatButtonTabs from '../tabs/FloatButtonTabs';
import CustomDrawerContent from './components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const renderDrawerIcon = iconName => {
  const icons = {
    home: Home,
    center: Circle,
    float: PanelsTopLeft,
    dashboard: LayoutDashboard,
    notification: Bell,
    contact: Users,
    history: History,
    download: Download,
    help: CircleHelp,
    about: Info,
  };

  return ({ color, size }) => {
    const Icon = icons[iconName];

    return <Icon size={size} color={color} strokeWidth={2} />;
  };
};

const MainDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Main"
      drawerContent={props => <CustomDrawerContent {...props} />}
      screenOptions={{
        sceneStyle: {
          backgroundColor: '#fecaca',
        },
        headerStatusBarHeight: 35,
        headerStyle: {
          backgroundColor: '#fa0404',
        },

        headerTintColor: '#111827',

        headerTitleStyle: {
          fontSize: 18,
          fontWeight: '700',
        },

        headerShadowVisible: false,

        drawerStyle: {
          width: 300,
          backgroundColor: '#fecaca',
        },

        drawerActiveBackgroundColor: '#ff0000',
        drawerActiveTintColor: '#030303',

        drawerInactiveTintColor: '#000000',

        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: '600',
          marginLeft: 4,
          color: 'black',
        },

        drawerItemStyle: {
          borderRadius: 14,
          marginRight: 6,
          marginVertical: 3,
          paddingHorizontal: 0,
        },

        drawerContentContainerStyle: {
          paddingTop: 32,
        },
      }}
    >
      {/* Main */}
      <Drawer.Screen
        name="Main"
        component={MainTabs}
        options={{
          title: 'Home',
          drawerIcon: renderDrawerIcon('home'),
        }}
      />

      {/* Center Tabs */}
      <Drawer.Screen
        name="Center"
        component={CenterButtonTabs}
        options={{
          title: 'Center Tabs',
          drawerIcon: renderDrawerIcon('center'),
        }}
      />

      {/* Floating Tabs */}
      <Drawer.Screen
        name="Float"
        component={FloatButtonTabs}
        options={{
          title: 'Floating Tabs',
          drawerIcon: renderDrawerIcon('float'),
        }}
      />

      {/* Dashboard */}
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          drawerIcon: renderDrawerIcon('dashboard'),
        }}
      />

      {/* Notification */}
      <Drawer.Screen
        name="Notification"
        component={NotificationScreen}
        options={{
          title: 'Notifications',
          drawerIcon: renderDrawerIcon('notification'),
        }}
      />

      {/* Contact */}
      <Drawer.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          title: 'Contacts',
          drawerIcon: renderDrawerIcon('contact'),
        }}
      />

      {/* History */}
      <Drawer.Screen
        name="History"
        component={HistoryScreen}
        options={{
          title: 'History',
          drawerIcon: renderDrawerIcon('history'),
        }}
      />

      {/* Download */}
      <Drawer.Screen
        name="Download"
        component={DownloadScreen}
        options={{
          title: 'Downloads',
          drawerIcon: renderDrawerIcon('download'),
        }}
      />

      {/* Help */}
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          title: 'Help & Support',
          drawerIcon: renderDrawerIcon('help'),
        }}
      />

      {/* About */}
      <Drawer.Screen
        name="About"
        component={AboutScreen}
        options={{
          title: 'About',
          drawerIcon: renderDrawerIcon('about'),
        }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawer;
