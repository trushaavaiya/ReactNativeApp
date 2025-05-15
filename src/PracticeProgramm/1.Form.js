import React, { useState } from "react";
import {
  View,
  Image,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  TextInput,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={style.container}>
      <Image
        source={require("../../src/image/welcome.png")}
        style={style.image}
      />
      <Text style={style.text1}>Welcome to the app</Text>
      <Text style={style.text2}>
        We're excited to help you book and manage your service appointment with
        ease. 😊
      </Text>

      <TouchableOpacity
        style={style.loginbutton}
        onPress={() => navigation.navigate("Login")}
      >
        <Text style={style.button}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={style.createAccount}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={style.container}>
      <Text style={style.heading}>Login</Text>
      <Text style={style.subheading}>Welcome back to the App</Text>
      <Text>Email Address</Text>
      <TextInput
        style={style.input}
        
        placeholderTextColor={"black"}
        value={email}
        onChangeText={setEmail}
      />
      <Text>Password</Text>
      <TextInput
        style={style.input}
        placeholderTextColor={"black"}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <View style={style.checkboxContainer}>
        <Text>Keep me signed in</Text>
      </View>

      <TouchableOpacity style={style.loginbutton}>
        <Text style={style.button}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Forgot Password")}>
        <Text style={style.forgotPassword}>Forgot Password?</Text>
      </TouchableOpacity>

      <Text style={style.orText}>or sign in with</Text>
      <TouchableOpacity style={style.googleButton}>
        <TouchableOpacity style={style.googleButton}>
  <View style={style.iconButtonContent}>
    <Image
      source={require("../../src/image/google.png")}
      style={style.icon}
    />
    <Text style={style.button}>Continue with Google</Text>
  </View>
</TouchableOpacity>

</TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
        <Text style={style.createAccount}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};



const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    height: 200,
    width: 350,
    alignSelf: "center",
    marginBottom: 30,
  },
  text1: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  text2: {
    color: "grey",
    textAlign: "center",
    marginBottom: 30,
  },
  button: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  loginbutton: {
    backgroundColor: "#0066ff",
    paddingVertical: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: "center",
  },
  googleButton: {
  backgroundColor: '#4285F4',
  paddingVertical: 15,
  paddingHorizontal: 20,
  borderRadius: 5,
  marginTop: 10,
  alignItems: 'center',
},

iconButtonContent: {
  flexDirection: 'row',        // places icon & text in one row
  alignItems: 'center',        // vertical alignment
  justifyContent: 'center',    // horizontal alignment
},

icon: {
  width: 20,
  height: 20,
  marginRight: 10,
},

button: {
  color: 'white',
  fontSize: 16,
  fontWeight: 'bold',
},

  createAccount: {
    color: "#0066ff",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 10,
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  subheading: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    color:"black"
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  forgotPassword: {
    color: "#0066FF",
    textDecorationLine: "underline",
    textAlign: "center",
    marginTop: 10,
  },
  orText: {
    marginTop: 20,
    fontSize: 14,
    textAlign: "center",
  },
  googleButton: {
    backgroundColor: "#4285F4",
    paddingVertical: 15,
    borderRadius: 5,
    marginTop: 10,
    alignItems: "center",
  },
});
