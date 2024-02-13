// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SplashScreen from './components/SplashScreen'; // Make sure this path is correct
import HomeScreen from './screens/HomeScreen';
import SearchScreen from './screens/SearchScreen';
import ProfileScreen from './screens/ProfileScreen';
import NavigationBar from './components/NavigationBar';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 10 seconds and show the main app
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    // While loading is true, show the SplashScreen
    return <SplashScreen />;
  }

  return (
    <NavigationContainer>
       <Tab.Navigator
        tabBar={(props) => <NavigationBar {...props} />}
        screenOptions={({ route }) => ({
          tabBarLabel: () => null, // Set tabBarLabel to null to hide it
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            }

            // Return the Ionicon component
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Главная', headerShown: false }}
        />
        <Tab.Screen 
          name="Search" 
          component={SearchScreen} 
          options={{ title: 'Поиск', headerShown: false }}
        />
        <Tab.Screen 
          name="Profile" 
          component={ProfileScreen} 
          options={{ title: 'Кабинет', headerShown: false }} 
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
