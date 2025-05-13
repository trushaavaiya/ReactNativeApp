import { StyleSheet, View } from "react-native";
import { Text, TextInput } from "react-native-gesture-handler";
import Box from "./component/Box";

export default function App(){
  return(
    <View style={style.container}>
      <Text>Username</Text>
      <TextInput placeholder="username"/>
    </View>
  );
}
const style = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"plum"
  }

});