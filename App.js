import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import Home from "./Screens/Home";
import Activity from "./Screens/Activity";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Payment from "./Screens/Payment";
import Inbox from "./Screens/Inbox";
import Account from "./Screens/Account";
import Ionicons from "react-native-vector-icons/Ionicons"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import {COLORS} from "./Constants/theme";

const Tab = createBottomTabNavigator();
const App = props => {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons name={focused ? 'compass' : 'compass-outline'}
                                  color={focused ? COLORS.primary : color} size={size + 1}/>
                    ),
                }} name="Home" component={Home}/>
                <Tab.Screen options={{
                    headerShown: false,
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons name={focused ? 'reader' : 'reader-outline'} color={focused ? COLORS.primary : color}
                                  size={size + 1}/>
                    ),
                }} name="Activity" component={Activity}/>
                <Tab.Screen options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <Ionicons name={focused ? 'wallet' : 'wallet-outline'} color={focused ? COLORS.primary : color}
                                  size={size + 1}/>
                    ),
                }} name="Payment" component={Payment}/>
                <Tab.Screen options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <MaterialCommunityIcons name={focused ? 'inbox' : 'inbox-outline'}
                                                color={focused ? COLORS.primary : color} size={size + 1}/>
                    ),
                }} name="Inbox" component={Inbox}/>
                <Tab.Screen options={{
                    tabBarIcon: ({color, size, focused}) => (
                        <MaterialCommunityIcons name={focused ? 'account-circle' : 'account-circle-outline'}
                                                color={focused ? COLORS.primary : color} size={size + 1}/>
                    ),
                }} name="Account" component={Account}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
};

const styles = StyleSheet.create({});

export default App;
