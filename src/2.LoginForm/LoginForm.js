import { Alert, Button, StyleSheet, Text , View ,TextInput  } from "react-native";
import { useState } from "react";


export default function App(){
const [email , setEmail] = useState('');
const [password , setPassword] = useState('');

const handleLogin = () => {
    if(email === ''||password === ''){
        Alert.alert('validation','please fill in all details ');
    }
    else
    {
        Alert.alert('Login successfull',`welcome, ${email}!`);
    }
};

    return(
        <View style={style.container}>
            <Text style={style.text}>Login Form</Text>
            <TextInput 
            style={style.input}
            placeholder="Enter email"
            placeholderTextColor={"black"}
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            
            />

            <TextInput 
            style={style.input}
            placeholder="Enter password"
            placeholderTextColor={"black"}
            value={password}
            onChangeText={setPassword}
            keyboardType="alpha-numeric"
            />
            
            <Button title="Submit" onPress={handleLogin}/>

        </View>

    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center"
    },
    text:{
        fontSize:28,
        fontWeight:"bold",
        marginBottom:30,
        color:"#333",
        textAlign:"center"
    },
    input:{
        borderWidth:1,
        borderColor:"#aaa",
        padding:10,
        marginBottom:30,
        borderRadius:5,
        backgroundColor:"#fff",
        width:"80%"
    }
});