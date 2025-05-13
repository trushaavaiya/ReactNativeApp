import { Text , View ,StyleSheet, Image} from "react-native";

const getTypeDetails = (type) =>{
    switch(type.toLowerCase()){
        case"electric":
            return{bordercolor:"#FFD700",emoji :"⚡"};
        case"water":
            return{bordercolor:"#6493EA",emoji :"💧"};
        case"fire":
            return{bordercolor:"#FF5733",emoji :"🔥"};
        case"grass":
            return{bordercolor:"#66CC66",emoji :"🌿"};
        default:
            return{bordercolor:"#A0A0A0",emoji :"❓"};

    }
};

export default function PokemonCard({
    name,
    image,
    type,
    hp,
    moves=[],
    weaknesses=[]
})
{
const { bordercolor,emoji}= getTypeDetails(type);

    return(
        <View style={styles.card}>
            <View style={styles.namecontainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.hp}>❤️{hp}</Text>
            </View>
            <Image 
            source={image} 
            style={styles.image}
            accessibsilityLabel={`${name} pokemon`}
            resizeMode="contain"/>

            <View style={styles.typecontainer}>
                <View style={[styles.badge,{bordercolor}]}>
                <Text style={styles.typeEmoji}>{emoji}</Text>
                <Text style={styles.typeText }>{type}</Text>
                </View>
            </View>

            <View style={styles.movescontainer}>
                <Text style={styles.moveText}>
                    moves:{moves.join(", ")}
                </Text>
            </View>
            <View style={styles.weaknessescontainer}>
                <Text style={styles.weaknessesText}>
                    weaknesses:{weaknesses.join(", ")}
                </Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
card :{
    backgroundColor:"white",
    borderRadius:16,
    borderWidth:2,
    padding:16,
    elevation :5,
},
namecontainer:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginBottom:32,

},
name:{
    fontSize:30,
    fontWeight:"bold"
},
hp:{
    fontSize:22
},
image:{
    width:"100%",
    height:200,
    marginBottom:16,

},
typecontainer:{
    marginBottom:40,
    alignItems:"center",


},
badge:{
    flexDirection:"row",
    alignItems :"center",
    paddingVertical:6,
    paddingHorizontal:12,
    borderRadius:20,
    borderWidth:4
},typeEmoji:{
    marginRight:12,
    fontSize:30, 
},
typeText:{
    fontSize:22,
    fontWeight:"bold"
},
movescontainer:{
    marginBottom:16,

},
moveText:{
    fontSize:22,
    fontWeight:"bold"
},
weaknessescontainer:{
    marginBottom:16
},
weaknessesText:{
    fontSize:22,
    fontWeight:"bold",
}
});