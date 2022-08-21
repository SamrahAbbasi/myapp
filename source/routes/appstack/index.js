import React from "react"
import Profile from "../../screens/profile"
import Home from "../../screens/home"
import Feedbacks from "../../screens/feedbacks"
import Contactus from "../../screens/contactus"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon } from "react-native-vector-icons/icon"
import {FontAwesome} from 'react-native-vector-icons/FontAwesome'

const Homestack=createNativeStackNavigator()
const Feedbacksstack=createNativeStackNavigator()
const Contactusstack=createNativeStackNavigator()
const Profilestack=createNativeStackNavigator()
const Mainapp=createNativeStackNavigator()
const Maintab=createBottomTabNavigator()

const Homestackscreen=() =>{
    return(
        <Homestack.Navigator screenOptions={{headerShown:false}}>
            <Homestack.Screen name="Home" component={Home}/>
        </Homestack.Navigator>

    )
}
const Profilestackscreen=() =>{
    return(
        <Profilestack.Navigator screenOptions={{headerShown:false}}>
            <Profilestack.Screen name="Profile" component={Profile}/>
        </Profilestack.Navigator>

    )
}
const Feedbacksstackscreen=() =>{
    return(
        <Feedbacksstack.Navigator screenOptions={{headerShown:false}}>
            <Feedbacksstack.Screen name="Feedbacks" component={Feedbacks}/>
        </Feedbacksstack.Navigator>

    )
}
const Contactusstackscreen=() =>{
    return(
        <Contactusstack.Navigator screenOptions={{headerShown:false}}>
            <Contactusstack.Screen name="Contactus" component={Contactus}/>
        </Contactusstack.Navigator>

    )
}
const Maintabscreens=() =>{
    return(
        <Maintab.Navigator>
        <Maintab.Screen name="Home" component={Homestackscreen}/>
        <Maintab.Screen name="Feedbacks" component={Feedbacksstackscreen}/>
        <Maintab.Screen name="Contactus" component={Contactusstackscreen}/>
        <Maintab.Screen name="Profile" component={Profilestackscreen}/>
        </Maintab.Navigator>
    )
}
const App=() =>{
    return(
        <Mainapp.Navigator screenOptions={{headerShown:false}}>
            <Mainapp.Screen name="App" component={Maintabscreens}/>
        </Mainapp.Navigator>
    )
}
export default App