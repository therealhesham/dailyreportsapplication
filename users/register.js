import axios from "axios";
import { useState } from "react";
import { View } from "react-native";







function Registeruser(){

async function register(){


const post = await axios.post(`${process.env.EXPO_PUBLIC_URL}/register`,{username:"hesham",password:"heshams",RepeatPassword:"heshams",projects:[]})
console.log(post.data)


}



return(




)





}


export default Registeruser;