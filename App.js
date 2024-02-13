import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import ProductDetailScreen from './screens/ProductDetailScreen';
import NavigationBar from './components/NavigationBar';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Font from 'expo-font';
import { Text } from 'react-native';

// Set default text properties for Montserrat font
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: 'Montserrat' };

const Tab = createBottomTabNavigator();
const SearchStack = createStackNavigator();

// Load fonts outside of the App component
const loadFonts = async () => {
  await Font.loadAsync({
    'Montserrat': require('./assets/fonts/Montserrat-Regular.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
    // Include other font weights as needed
  });
};

// Preload fonts before rendering the app content
const useFonts = async () => {
  await loadFonts();
};

// Search Stack Navigator
function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen 
        name="SearchMain" 
        component={SearchScreen} 
        options={{ headerShown: false }} 
      />
      <SearchStack.Screen 
        name="ProductDetail" 
        component={ProductDetailScreen} 
        options={{
          headerTitle: '',
          headerBackTitleVisible: false,
          headerBackVisible: true,
        }}
      />
    </SearchStack.Navigator>
  );
}

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await useFonts();
        setFontsLoaded(true);
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoading(false);
      }
    }

    prepare();
  }, []);

  if (!fontsLoaded || isLoading) {
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <NavigationBar {...props} />}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarLabel: () => null,
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Search" component={SearchStackScreen} options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
