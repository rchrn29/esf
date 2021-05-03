
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './screens/searchscreen';
import Transaction from './screens/bookscreen';
import{createAppContainer} from 'react-navigation';
import{ createBottomTabNavigator } from "react-navigation-tabs";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>WillyApp</Text>
  <AppContainer/>
    </View>
  );
}
const TabNavigator=createBottomTabNavigator({
  Transaction:{screen:Transaction},
  Search:{screen:Search}
})
const AppContainer=createAppContainer(TabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
