import { Text,View ,StyleSheet ,StatusBar, SafeAreaView, TextInput , Switch} from "react-native";
import { useState } from "react";

export default function App(){
  const[name, setName ]=useState("")
  const[isDarkMode , setISDarkMode]= useState(false)
  return(
    <SafeAreaView style={style.container}>
      <TextInput style={style.input}
        value={name} 
        onChangeText={setName}
        placeholder="Enter your name"
        // secureTextEntry
        // keyboardType="numeric"
        autoCorrect={true}
        autoCapitalize="words"
        />
        <TextInput style={[style.input,style.multilineText]} placeholder="message" multiline></TextInput>
      <Text style={style.text}>My name is {name}</Text>
      <View style={style.switchcontainer}>
        <Text style={style.text}>
          Dark mode
        </Text>
       <Switch value={isDarkMode}
       onValueChange={() => setISDarkMode((previousState)=>!previousState)}
       trackColor={{false:"white",true:"blue"}}
       thumbColor="#f4f3f4"
       />

      </View>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container:{
flex:1,
backgroundColor:"plum",
paddingTop:StatusBar.currentHeight,
  },
  input:{
    height:40, 
    margin:12,
    padding:10,
    borderWidth:1,
    color:"black",
    backgroundColor:"skyblue",
    
  },text:{
    fontSize:30,
    padding:10, 
  },
  multilineText:{
    minHeight:100,
    fontSize:20,
    textAlignVertical:"top",
  },
  switchcontainer:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:10,
  },
})