import React from "react"
import {View,Text} from "react-native"
const Profile = () =>{
    return(
        <View>
            <View style={{backgroundColor:"coral",alignItems:'center',borderRadius:20 ,height:130,width:300,justifyContent:'center',marginLeft:40,marginTop:30,}}>
            <Text> Heyyy!!!</Text>
        </View>
        <View style={{backgroundColor:"skyblue",borderRadius:20 ,alignItems:'center',height:130,width:300,justifyContent:'center',marginLeft:40,marginTop:30,}}>
            <Text>Welcome to Profilescreen</Text>
        </View>
        </View>
    )
} 
export default Profile