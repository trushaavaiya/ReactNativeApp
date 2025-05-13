
import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
//import FirstScreen from './src/New';
//import Counter from './src/1.counter/Counter'
//import LoginForm from './src/2.LoginForm/LoginForm'
//import ToDoApp from './src/3.ToDoApp/ToDoApp'
//import Calculator from './src/4.Calculator/Calculator'
//import ToDoList from './src/5.ToDoList/Edit'
//import Weather from './src/6.Weather/Weather'
//import LocalStorage from './src/7.LocalStorage/LocalStorage'
// import ImageGallery from './src/8.ImageGallery/ImageGallery'


function App() {

  return (
    <View style={{flex:1}}>
      <StatusBar
        barStyle={'light-content'}
      />
      {/* <FirstScreen/> */}
      {/* <Counter/> */}
      {/* <LoginForm/> */}
      {/* <ToDoApp/> */}
      {/* <Calculator/> */}
      {/* <ToDoList/> */}
      {/* <Weather/> */}
      {/* <LocalStorage/> */}
      {/* <ImageGallery/> */}
       
      
    </View>
  );
}

const style = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
