import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// @ts-ignore
import Account from "./src/img/SVG/account.svg";
// @ts-ignore
import AccountOutline from "./src/img/SVG/account-outline.svg";
// @ts-ignore
import Mail from "./src/img/SVG/mail.svg";
// @ts-ignore
import MailOutline from "./src/img/SVG/mail-outline.svg";


import Test1 from "./src/screens/test1";
import Test2 from "./src/screens/test2";

const test1Name = 'test1';
const test2Name = 'test2';


const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
        <Tab.Navigator
            initialRouteName={test1Name}
            screenOptions={({route}) => ({
                tabBarIcon: ({focused, color, size}) => {
                  let iconName;
                  let rn = route.name;

                  if(rn === test1Name){
                    iconName = focused ? 'mail' : 'mail-outline'
                  }
                  else if (rn === test2Name){
                    iconName = focused ? 'account' : 'account-outline'
                  }

                  switch(iconName){
                      case 'mail':
                          return <Mail width={32} height={32} fill="#000" />
                      case 'mail-outline':
                          return <MailOutline width={32} height={32} fill="#000" />
                      case 'account':
                          return <Account width={32} height={32} fill="#000" />
                      case 'account-outline':
                          return <AccountOutline width={32} height={32} fill="#000" />
                  }


                },
                tabBarStyle: {height: 64},
                tabBarActiveTintColor: "#000555",
                showIcon: true,

            })}
        >
            <Tab.Screen name={test1Name} component={Test1} />
            <Tab.Screen name={test2Name} component={Test2} />



        </Tab.Navigator>
      </NavigationContainer>
  );
};
const styles = StyleSheet.create({
  baseText:{
    color: "black",
    fontFamily: "Cochin"
  },
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
});

export default App;
