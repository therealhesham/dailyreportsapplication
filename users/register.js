import { Input } from "@ui-kitten/components";
import axios from "axios";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Text,Button,TextInput ,StyleSheet, Dimensions} from "react-native";
import { View } from "react-native";







function Registeruser(){
const [username,setUserName]=useState("");
const [password,setPassword]=useState("");
const [repeatPassword,setRepeatPassword]=useState("");
const [projects,setProjects]=useState([]);

const dim = Dimensions.get("screen")/2
async function register(){


const post = await axios.post(`${process.env.EXPO_PUBLIC_URL}/register`,{username:"hesham",password:"heshams",RepeatPassword:"heshams",projects:[]})



}



return(
<View style={style.view}>
<Text style={{fontSize:15,alignSelf:"center"}}> تسجيل بيانات المستخدم</Text>    
<TextInput type="text" placeholder="  اسم المستخدم"  value={username} onChangeText={e=>setUserName(e)} style={{backgroundColor:"white"}}/>
<TextInput type="password" placeholder="  الرقم السري" value={password} onChangeText={e=>setPassword(e)} style={{backgroundColor:"white"}}/>
<TextInput type="password" placeholder="  اعد كتابة الرقم السري" value={repeatPassword} onChangeText={e=>setRepeatPassword(e)} style={{backgroundColor:"white"}}/>
<TextInput type="text" placeholder=" المشاريــع"      onChangeText={e=>console.log(e)} style={{backgroundColor:"white"}}/>
<View style={style.button}><Button title="تسجيل" onPress={()=>register()}/></View>

</View>



)





}
const style= StyleSheet.create({view:{
    gap:2,
    padding:6
    
    },
    button:{
        alignSelf:"center",
width:Dimensions.get("window").width/2

    }


})

export default Registeruser;