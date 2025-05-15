import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform
} from "react-native";
import CheckBox from "@react-native-community/checkbox";


const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.loginTitle}>Login</Text>
      <Text style={styles.welcomeText}>Welcome back to the app</Text>

      <Text style={styles.label}>Email Address</Text>
      <TextInput
        style={styles.input}
        placeholder="hello@example.com"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <View style={styles.passwordRow}>
        <Text style={styles.label}>Password</Text>
        <TouchableOpacity onPress={() => console.log("Forgot Password")}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      </View>
      <TextInput
        style={styles.input}
        placeholder="••••••••"
        placeholderTextColor="#999"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={keepSignedIn}
          onValueChange={setKeepSignedIn}
          style={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>Keep me signed in</Text>
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>or sign in with</Text>

      <TouchableOpacity style={styles.googleButton}>
        <Image
          source={require("../../src/image/google.png")}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Continue with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => console.log("Create account")}>
        <Text style={styles.createAccount}>Create an account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    justifyContent: "center"
  },
  loginTitle: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 5
  },
  welcomeText: {
    fontSize: 16,
    color: "#555",
    marginBottom: 20
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "500"
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16
  },
  passwordRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5
  },
  forgotText: {
    color: "#0066FF",
    fontSize: 14
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  checkbox: {
    marginRight: 8,
    
  },
  checkboxLabel: {
    fontSize: 14
  },
  loginButton: {
    backgroundColor: "#3366FF",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    marginBottom: 20
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600"
  },
  orText: {
    textAlign: "center",
    color: "#888",
    marginBottom: 15
  },
  googleButton: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 20,
    justifyContent: "center",
    marginBottom: 20,
    backgroundColor:"lightgrey"
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  googleButtonText: {
    fontSize: 16,
    fontWeight: "500"
  },
  createAccount: {
    color: "#0066FF",
    textAlign: "center",
    textDecorationLine: "underline"
  }
});
