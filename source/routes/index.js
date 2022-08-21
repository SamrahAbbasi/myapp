import App from "./appstack"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from "react"
import {NavigationContainer} from '@react-navigation/native';
const Appstack = createNativeStackNavigator()
const Appnavigation = () =>{
    return(
        <NavigationContainer>
            <Appstack.Navigator screenOptions={{headerShown:false}}>
            <Appstack.Screen name= "App" component={App}/>
            </Appstack.Navigator>
        </NavigationContainer>
    )
}
export default Appnavigation