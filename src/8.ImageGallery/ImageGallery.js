import { useState } from "react";
import { View ,Text,Image,StyleSheet, TouchableOpacity, Modal, Dimensions } from "react-native";
import { FlatList } from "react-native";


const images = [
  { id: '1', uri: 'https://picsum.photos/id/1011/300' },
  { id: '2', uri: 'https://picsum.photos/id/1015/300' },
  { id: '3', uri: 'https://picsum.photos/id/1016/300' },
  { id: '4', uri: 'https://picsum.photos/id/1018/300' },
  { id: '5', uri: 'https://picsum.photos/id/1020/300' },
  { id: '6', uri: 'https://picsum.photos/id/1024/300' },
  
];

const numColumns = 3;
const screenWidth = Dimensions.get('window').width;
const imageSize = screenWidth/numColumns;


export default function App(){
const [selectedImage , setSelectedImage] = useState(null);

    return(
        <View style={style.container}>
            <FlatList 
            data={images}
            keyExtractor={(item) =>item.id}
            numColumns={numColumns}
            renderItem={({item}) => (
                <TouchableOpacity  onPress={() => setSelectedImage(item.uri)}>
                    <Image source={{uri:item.uri}} style={style.imageThumbnail}/>
                </TouchableOpacity>
            )}
            />

            <Modal  visible={!!selectedImage} transparent={true}>
                <TouchableOpacity style={style.modelContainer} onPress={() =>setSelectedImage(null)}>
                    <Image source={{uri:selectedImage}} style={style.fullscreenImage} resizeMethod="contain"/>

                </TouchableOpacity>

            </Modal>

        </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex:1,
        marginTop:40,
        backgroundColor:"#fff",
        
    },
    imageThumbnail:{
        width:imageSize,
        height:imageSize,
        margin:1,
    },
    modelContainer:{
        flex:1,
        backgroundColor:'black',
        justifyContent:"center",
        alignItems:"center",
    },
    fullscreenImage:{
        width:"100%",
        height:"100%"
    }
});