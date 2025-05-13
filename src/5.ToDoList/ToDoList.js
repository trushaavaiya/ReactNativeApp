import { useState } from "react";
import { View,Text,TextInput,StyleSheet,Button, Alert, FlatList, TouchableOpacity } from "react-native";

export default function App(){
    const [task ,setTask] = useState('');
    const [ tasks , setTasks] = useState([]);

    const addTask = () =>{
        if(task.trim() === '')
        {
            Alert.alert('Error','Task cannot be empty');
            return;
        }
        setTasks([...tasks, {id: Date.now().toString(),text:task}]);
        setTask('');

    };


    const deleteTask = (id) => {
        setTasks(tasks.filter((t) =>t.id !==id));
    };

    return(
        <View style={style.container}>
            <Text style={style.title}>ToDoList</Text>
            <TextInput 
            style={style.input}
            placeholder="Enter a task"
            value={task}
            onChangeText={setTask}
            placeholderTextColor={"black"}
            />

            <Button title="Add Task" onPress={addTask} />

            <FlatList 
            data={tasks}
            keyExtractor={(item) =>item.id}
            renderItem={({item}) => (
                <View style={style.taskItem}>
                    <Text style={style.taskText}>{item.text}</Text>
                    <TouchableOpacity onPress={() =>deleteTask(item.id)}>
                        <Text style={style.deleteButton}>❌</Text>
                    </TouchableOpacity>


                </View>
            ) }
            style={{marginTop:20,width:"100%"}}   
            
            />

        </View>
    );
}

const style = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"#E8F5E9",
    padding:20,
    paddingTop:60,
    justifyContent:"center",
    alignItems:"center"

},
title:{
    color:"#388e3c",
    fontSize:24,
    fontWeight:"bold",
    marginBottom:20,
},
input:{
    borderColor:'#BDBDBD',
    borderWidth:1,
    width:"100%",
    padding:10,
    backgroundColor:"#ffffff",
    borderRadius:5,
    color:"black",
    marginBottom:10,
},
taskItem:{
    flexDirection:"row",
    justifyContent:"space-between",
    backgroundColor:"#C8E6C9",
    padding:10,
    marginBottom:10,
    borderRadius:5,
},
taskText:{
    fontSize:18,
    color:"#1B5E20",


},
deleteButton:{
    fontSize:18,
    color:"#D32F2F",

}
});