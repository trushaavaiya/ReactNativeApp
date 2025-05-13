import { Platform, SafeAreaView, ScrollView, StyleSheet } from "react-native";
import PokemonCard from "./component/pokemoncard";

export default function App(){

  const charmanderData={
    name:"charmander",
    image:require("./image/charmander.png"),
    type :"Fire",
    hp :42,
    moves:["Scratch","Ember","Growl","Leer"],
    weaknesses:["Water","Rock"]
  };

  const squirtleData={
    name:"squirtle",
    image:require("./image/squirtle.png"),
    type :"water",
    hp :41,
    moves:["Tackle", "Water Gun"],
    weaknesses:["Electric", "Grass"]
  };
  const bulbasaurData={
    name:"bulbasaur",
    image:require("./image/bulbasaur.png"),
    type :"grass",
    hp :40,
    moves:["Vine Whip", "Tackle"],
    weaknesses:["Fire", "Ice", "Flying", "Psychic"]
  };
  const pikachuData={
    name:"pikachu",
    image:require("./image/pikachu.png"),
    type :"electric",
    hp :39,
    moves:["Quick Attack", "Thunderbolt"],
    weaknesses:["Ground"]
  };

  return(
    <SafeAreaView style={style.container}>
      <ScrollView >
        <PokemonCard {...charmanderData}></PokemonCard>
        <PokemonCard {...squirtleData}></PokemonCard>
        <PokemonCard {...bulbasaurData}></PokemonCard>
        <PokemonCard {...pikachuData}></PokemonCard>
        </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:"#f5f5f5",
  paddingTop :Platform.OS==='android'?25:0, 
  paddingBottom:30,
  padding:16,
  elevation:5,
  paddingVertical:50, 
},

});