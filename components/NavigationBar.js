// NavigationBar.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavigationBar = ({ state, descriptors, navigation }) => {
    return (
      <View style={styles.navContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
  
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
  
          return (
            <TouchableOpacity
              key={route.key}
              onPress={onPress}
              style={styles.navItem}
            >
              <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

const styles = StyleSheet.create({
    navContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      backgroundColor: '#fff', // Replace with your navigation bar color
      borderTopWidth: 1,
      borderTopColor: '#ddd', // Replace with your navigation bar border color
    },
    navItem: {
      padding: 10,
    },
  });
  
  export default NavigationBar;