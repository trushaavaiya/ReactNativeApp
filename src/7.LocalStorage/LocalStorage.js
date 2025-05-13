import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);

  // Load tasks on app start
  useEffect(() => {
    loadTasks();
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      Alert.alert('Error', 'Failed to save tasks.');
    }
  };

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem('tasks');
      if (storedTasks) setTasks(JSON.parse(storedTasks));
    } catch (error) {
      Alert.alert('Error', 'Failed to load tasks.');
    }
  };

  const addTask = () => {
    if (task.trim() === '') {
      Alert.alert('Validation', 'Please enter a task.');
      return;
    }
    const newTask = { id: Date.now().toString(), text: task };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 To-Do List (Local Storage)</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
        placeholderTextColor="#666"
      />
      <Button title="Add Task" onPress={addTask} />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <TouchableOpacity onPress={() => deleteTask(item.id)}>
              <Text style={styles.deleteButton}>❌</Text>
            </TouchableOpacity>
          </View>
        )}
        style={{ marginTop: 20, width: '100%' }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1F8E9',
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#33691E',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#AED581',
    borderRadius: 8,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#DCEDC8',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  taskText: {
    fontSize: 16,
    color: '#33691E',
  },
  deleteButton: {
    fontSize: 18,
    color: '#D32F2F',
  },
});
