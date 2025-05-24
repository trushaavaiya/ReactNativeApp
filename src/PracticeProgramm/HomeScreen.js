import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView, TextInput, SafeAreaView } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from "react";

const categories = [
  { title: 'Taager Offers', icon: require('../../src/image/Bag.png') },
  { title: 'Mobile Accessories', icon: require('../../src/image/HeadPhone.png') },
  { title: 'Home Appliances', icon: require('../../src/image/mixer.png') },
  { title: 'Personal Care', icon: require('../../src/image/Women.png') },
  { title: 'Computer Accessories', icon: require('../../src/image/computer.png') },
  { title: 'Shoes', icon: require('../../src/image/shoes.png') },
  { title: 'Clothes', icon: require('../../src/image/T-shirt.png') },
  { title: 'Toys', icon: require('../../src/image/Toys.png') },
];

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.header}>
        <Text style={style.appName}>E-commerce 🛍️</Text>
        <View style={style.headerIcons}>
          <Ionicons name="notifications-outline" size={24} color="#000" style={style.iconSpacing} />
          <Ionicons name="cart-outline" size={24} color="#000" />
        </View>
      </View>

      <View style={style.searchcontainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={style.searchinput}
          placeholder="What are you searching?"
          placeholderTextColor={"black"}
        />
      </View>

      <ScrollView contentContainerStyle={style.scrollContent}>
        <Image source={require('../../src/image/banner.png')} style={style.banner} />

        <View style={style.sectionheader}>
          <Text style={style.sectionTitle}>Categories</Text>
          <Text style={style.showAll}>Show all</Text>
        </View>

        <View style={style.grid}>
          {categories.map((cat, index) => (
            <TouchableOpacity
            key={index}
            style={style.categoryBox}
            onPress={() => navigation.navigate('CategoryDetails', { title: cat.title })} 
            >
            <Image source={cat.icon} style={style.categoryicon} />
            <Text style={style.categoryText}>{cat.title}</Text>
            </TouchableOpacity>

          ))}
        </View>

        <View style={style.sectionheader}>
          <Text style={style.sectionTitle}>All Product</Text>
          <Text style={style.showAll}>Show all</Text>
        </View>

        <View style={style.productPlaceholder}>
          <Text style={{ color: '#999', textAlign: 'center' }}>Product list goes here...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  appName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconSpacing: {
    marginRight: 16,
  },
  searchcontainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 12,
    padding: 10,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  searchinput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
    color: "black"
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },
  banner: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  sectionheader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  showAll: {
    fontSize: 14,
    color: "#2563eb"
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  categoryBox: {
    width: "23%",
    alignItems: 'center',
    marginBottom: 16,
  },
  categoryText: {
    fontSize: 12,
    textAlign: "center",
  },
  categoryicon: {
    width: 40,
    height: 40,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  productPlaceholder: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#f9f9f9",
    borderRadius: 10,
    marginBottom: 20,
  },
});
