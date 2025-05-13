import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [task, setTask] = useState('');
  const [tasks, setTasks] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const addOrEditTask = () => {
    if (task.trim() === '') {
      Alert.alert('Error', 'Task cannot be empty');
      return;
    }

    if (editingId) {
      // Editing existing task
      setTasks(tasks.map(t => t.id === editingId ? { ...t, text: task } : t));
      setEditingId(null);
    } else {
      // Adding new task
      setTasks([...tasks, { id: Date.now().toString(), text: task }]);
    }

    setTask('');
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
    if (editingId === id) {
      setEditingId(null);
      setTask('');
    }
  };

  const editTask = (item) => {
    setTask(item.text);
    setEditingId(item.id);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ToDo List</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter a task"
        value={task}
        onChangeText={setTask}
        placeholderTextColor={"black"}
      />
      <Button
        title={editingId ? "Update Task" : "Add Task"}
        onPress={addOrEditTask}
      />

      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.taskItem}>
            <Text style={styles.taskText}>{item.text}</Text>
            <View style={styles.buttons}>
              <TouchableOpacity onPress={() => editTask(item)}>
                <Text style={styles.editButton}>✏️</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => deleteTask(item.id)}>
                <Text style={styles.deleteButton}>❌</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        style={{ marginTop: 20, width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8F5E9",
    padding: 20,
    paddingTop: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#388e3c",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    borderColor: "#BDBDBD",
    borderWidth: 1,
    width: "100%",
    padding: 10,
    backgroundColor: "#ffffff",
    borderRadius: 5,
    color: "black",
    marginBottom: 10,
  },
  taskItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#C8E6C9",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  taskText: {
    fontSize: 18,
    color: "#1B5E20",
    flex: 1,
  },
  buttons: {
    flexDirection: "row",
    alignItems: "center",
  },
  editButton: {
    fontSize: 18,
    color: "#1976D2",
    marginRight: 10,
  },
  deleteButton: {
    fontSize: 18,
    color: "#D32F2F",
  },
});
