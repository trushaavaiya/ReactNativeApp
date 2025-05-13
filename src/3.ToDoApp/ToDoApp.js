import { View,Text, TextInput, StyleSheet, FlatList, TouchableOpacity , Button} from "react-native";
import { useState } from "react";

export default function App(){
const [task,setTask] = useState('');
const [taskList,setTaskList] = useState([]);

const addTask = () =>{
    if(task.trim()!==''){
        setTaskList([...taskList,task]);
        setTask('');
    }
};

const deleteTask =(index)=>{
    const updatedTasks =[...taskList];
    updatedTasks.splice(index,1);
    setTaskList(updatedTasks);

};

    return(
        <View style={style.container} >
            <Text style={style.title}>To-Do-App</Text>

            <TextInput 
            style={style.input}
            onChangeText={setTask}
            value={task}
            placeholder="Enter a task"
            placeholderTextColor={"black"}
            />

            <Button title="Add Task"  onPress={addTask}/>

            <FlatList
            data={taskList}
            keyExtractor={(item,index) => index.toString()}
            renderItem={({item,index}) => (
                <TouchableOpacity onPress={() => deleteTask(index)}>
                    <Text style={style.taskitem}>{item}</Text>
                </TouchableOpacity>
            )}
            />

        </View>
    );
}

const style = StyleSheet.create({
container:{
    flex:1,
    backgroundColor:"white",
    paddingTop:10,
    paddingHorizontal:20,
    
},
title:{
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'black'
},
input: {
    borderWidth: 1,
    borderColor: '#aaa',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
    backgroundColor: '#fff'
  },
  taskitem: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    fontSize: 18
  }



});