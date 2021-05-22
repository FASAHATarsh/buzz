import React,{Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import facebook from './screens/facebook';
import instagram from './screens/instagram';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';


export default class App extends Component {
  render()
  {
  return (
    <View style={styles.container}>

      <AppContainer />
    </View>
  );
}

}

const tabNavigator = createBottomTabNavigator({
  facebook:{screen:facebook},
  instagram:{screen:instagram}
})

const AppContainer=createAppContainer(tabNavigator);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
   
  },
});
