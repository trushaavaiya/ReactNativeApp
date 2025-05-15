import {  useState } from "react";
import { StyleSheet, TextInput, View,Text, Button, KeyboardAvoidingView, Image, Switch } from "react-native";

export default function App(){
    const[Username ,setUsername] = useState("")
    const[Password ,setPassword] = useState("")
    const[errors ,setError]= useState({})

    const validateForm =() =>{
         let errors ={};

         if(!Username) errors.Username ="username is require"
         if(!Password) errors.Password ="Password is require"

         setError(errors)

         return Object.keys(errors).length ===0 ;
         
    }
    
    const  handleSubmit =() =>{
        if(validateForm()){
            console.log("submitted to check",Username ,Password)
            setUsername("");
            setPassword("");
            setError({});
            console.log();
        }
    }
    return(
        <KeyboardAvoidingView behavior="padding"
        
        style={style.container}>
            <View style={style.form}>
                <Image source={require("./image/pikachu.png")} style={style.image}/>
            <Text style={style.label}>Username</Text>
            <TextInput style={style.input} placeholder="Enter username" placeholderTextColor="#888" value={Username} onChangeText={setUsername}/>
            {
                errors.Username?<Text style={style.errorText}>{errors.Username}</Text>:null 
            }

            <Text style={style.label}>Password</Text>
            <TextInput style={style.input} placeholder="Enter password "placeholderTextColor="#888" secureTextEntry   value={Password} onChangeText={setPassword}/>
            {
                errors.Password?<Text style={style.errorText}>{errors.Password}</Text>:null 
            }

            <Button title="Login" onPress= {handleSubmit} />
            
            </View>


        </KeyboardAvoidingView>
    );
}

const style = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    paddingHorizontal:20,
    backgroundColor:"#873AC5"
},
form:{
    backgroundColor:"white",
    padding:20,
    borderRadius:10,
    shadowColor:"black",
    elevation:5,
    shadowOffset:{
        width:0,
        height:2
    },shadowOpacity:0.25,
    shadowRadius:4,
},
label:{
    fontSize:16,
    marginBottom:5,
    fontWeight:"bold"
},
input:{
     height:40,
     borderColor:"#ddd",
     borderWidth:1,
     marginBottom:15,
     padding:10,
     borderRadius:5,
     color:"black",
     
},
image:{
    width:200,
    height:300,
    alignSelf:"center"
},errorText:{
    color:"red",
    marginBottom:10,
}

});