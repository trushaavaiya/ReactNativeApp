import React,{useState} from "react";
import { View,Text,TextInput,Button,StyleSheet, ActivityIndicator, Alert } from "react-native";

const API_KEY = 'e1a699b60004ee64fed81226e3c122c1';


export default function App(){
const [city ,setCity] = useState('');
const [weather ,setWeather] = useState(null);
const [loading , setLoading] = useState(false);

const fetchweather = async () => {
    if(!city.trim())
    {
        Alert.alert('error','please enter a city name');
        return;
    }

    setLoading(true);
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        )
        const data = await response.json();

        if(response.ok){
            setWeather(data);
        }
        else{
            Alert.alert('Error',data.message ||'City  not found');
            setWeather(null);

        }
    }
        catch(error){
            Alert.alert('Error','something went wrong');

        }
        finally{
            setLoading(false);
        }

    
    };

    return(
        <View style={style.container}>

        <Text style={style.title}>☁️Weather App</Text>

        <TextInput 
        style={style.input}
        placeholder="Enter your city name"
        value={city}
        onChangeText={setCity}
        placeholderTextColor="#666"        
        />

        <Button  title="Get weather" onPress={fetchweather} />

        {loading && <ActivityIndicator size="large" color="#000" style={{marginTop:20}}/>}

        {weather && (

            <View style={style.result}>
                <Text style={style.cityName}>{weather.name}</Text>
                <Text>🌡️ Temperature: {weather.main.temp} °C</Text>
                <Text>💧humidity: {weather.main.humidity}%</Text>
                <Text>🪽 wind speed: {weather.wind.speed}m/s</Text>
                <Text>⛅ condition:{ weather.weather[0].description}</Text>
            </View>

        )}

        </View>
    );
}
const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#E3F2FD",
        padding:20,
        paddingTop:60,
        alignItems:"center",
    },
    title:{
        fontSize:28,
        fontWeight:"bold",
        color:"#1565C0",
        marginBottom:20,
    },
    input:{
          width: '100%',
    borderWidth: 1,
    borderColor: '#90CAF9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#ffffff',
    color: '#000',
    },
     result: {
    marginTop: 30,
    padding: 20,
    backgroundColor: '#BBDEFB',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  cityName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#0D47A1',
    marginBottom: 10,
  },
});