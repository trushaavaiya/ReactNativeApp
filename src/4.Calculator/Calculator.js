import { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, Alert } from "react-native";

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleOperation = (operator) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      Alert.alert("Invalid input", "Please enter valid numbers.");
      return;
    }

    let res = 0;
    switch (operator) {
      case '+':
        res = n1 + n2;
        break;
      case '-':
        res = n1 - n2;
        break;
      case '*':
        res = n1 * n2;
        break;
      case '/':
        if (n2 === 0) {
          Alert.alert("Error", "Cannot divide by zero");
          return;
        }
        res = n1 / n2;
        break;
      default:
        return;
    }

    setResult(res);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculator</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter number 1"
        value={num1}
        onChangeText={setNum1}
        placeholderTextColor="black"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Enter number 2"
        value={num2}
        onChangeText={setNum2}
        placeholderTextColor="black"
        keyboardType="numeric"
      />

      <View style={styles.buttonRow}>
        <Button title="+" onPress={() => handleOperation('+')} />
        <Button title="-" onPress={() => handleOperation('-')} />
        <Button title="*" onPress={() => handleOperation('*')} />
        <Button title="/" onPress={() => handleOperation('/')} />
      </View>

      {result !== null && (
        <Text style={styles.result}>Result: {result}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DFF0EA",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#2E7D32",
    marginBottom: 30,
  },
  input: {
    borderRadius: 5,
    borderWidth: 1,
    marginBottom: 15,
    borderColor: "#ccc",
    width: "100%",
    backgroundColor: "#fff",
    padding: 10,
    color: "black",
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  result: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1B5E20',
  },
});
