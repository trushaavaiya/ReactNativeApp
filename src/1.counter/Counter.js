import { Text,View,Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function App(){
    const[count , setCount] = useState(0);

    return(
        <View style={style.container}>
            <Text style={style.title}>Simple counter</Text>
            <Text style={style.count}>{count}</Text>

            <View style={style.buttoncontainer}>
                <Button title="Increment" onPress={() => setCount(count+1)}/>
                <Button title="Decrement" onPress={() => setCount(count-1)}/>
                <Button title="reset" onPress={() => setCount(0)}/>

                
            </View>
        </View>

    );
}

const style = StyleSheet.create({
container:{
flex:1,
backgroundColor:"#F5F5DC",
justifyContent:"center",
alignItems:"center"
},
title:{
    fontSize:24,
    fontWeight:'bold',
    marginBottom:29,
},
count:{
    fontSize:24,
    marginBottom:29,
    color:"#333"
},
buttoncontainer:{
    width:"60%",
    gap:10,
},
});