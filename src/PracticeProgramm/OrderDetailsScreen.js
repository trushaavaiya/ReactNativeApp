import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const screenWidth = Dimensions.get('window').width;

const orderedProducts = [
  {
    id: '1',
    name: 'Helicopter with remote control',
    color: 'Yellow',
    price: '100 EGP',
    profit: '50',
    image: require('../../src/image/helicopter.png'),
    quantity: 'x1'
  },
  {
    id: '2',
    name: 'Smart Watch',
    color: 'Black',
    price: '100 EGP',
    profit: '50',
    image: require('../../src/image/Smartwatch.png'),
    quantity: 'x1'
  },
  {
    id: '3',
    name: 'VR Box Headset',
    color: 'Black',
    price: '100 EGP',
    profit: '50',
    image: require('../../src/image/vr.png'),
    quantity: 'x1'
  }
];

const OrderDetailsScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, backgroundColor: '#F2F2F2' }}>
      
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="chevron-back" size={28} color="#111" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Order Details</Text>
        <TouchableOpacity>
          <MaterialIcons name="add-shopping-cart" size={24} color="#111" />
        </TouchableOpacity>
      </View>

      
      <ScrollView style={styles.container}>
        
        <View style={styles.card}>
          <Text style={styles.orderId}>#34567876865457685</Text>
          <Text style={styles.status}>Pending Shipping Company</Text>
          <Text style={styles.date}>27 April 2021</Text>
        </View>

        
        <View style={styles.card}>
          <Text style={styles.customerName}>Trusha avaiya</Text>
          <Text style={styles.address}>surat,Gujarat,india.</Text>
          <Text style={styles.phones}>010000645445 - 01265433456</Text>
          <Text style={styles.note}>
            Please notify when order arrives properly without any fractures.
          </Text>
        </View>

        
        <Text style={styles.productsTitle}>Ordered Products (3)</Text>

        <FlatList
          data={orderedProducts}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productCard}>
              <Image source={item.image} style={styles.productImage} />
              <View style={styles.productInfo}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text style={styles.productDetails}>Color: {item.color}</Text>
                <Text style={styles.productDetails}>Price: {item.price}</Text>
                <Text style={styles.productDetails}>Quantity: {item.quantity}</Text>
                <Text style={styles.productProfit}>Profit: {item.profit} EGP</Text>
              </View>
            </View>
          )}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};


  const styles = StyleSheet.create({
    container: {
      padding: 16,
      backgroundColor: '#F2F2F2',
      flex: 1
    },
    header: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingVertical: 14,
  backgroundColor: '#fff',
  elevation: 4,
  shadowColor: '#000',
  shadowOpacity: 0.05,
  shadowOffset: { width: 0, height: 2 },
  shadowRadius: 3
},
headerTitle: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#111'
},

    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#111',
      marginBottom: 16,
      alignSelf: 'center'
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 16,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOpacity: 0.05,
      shadowRadius: 4,
      elevation: 2
    },
    orderId: {
      fontSize: 16,
      fontWeight: '600',
      color: '#333'
    },
    status: {
      color: '#FF8C00',
      fontWeight: 'bold',
      marginTop: 6,
      fontSize: 14
    },
    date: {
      color: '#888',
      fontSize: 12,
      marginTop: 2
    },
    customerName: {
      fontWeight: 'bold',
      fontSize: 16,
      marginBottom: 4,
      color: '#222'
    },
    address: {
      color: '#555',
      fontSize: 13,
      marginBottom: 2
    },
    phones: {
      color: '#555',
      fontSize: 13
    },
    note: {
      marginTop: 8,
      color: '#777',
      fontStyle: 'italic',
      fontSize: 12
    },
    productsTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#222',
      marginVertical: 12
    },
    productCard: {
      flexDirection: 'row',
      backgroundColor: '#fff',
      borderRadius: 12,
      padding: 12,
      marginBottom: 12,
      shadowColor: '#000',
      shadowOpacity: 0.06,
      shadowRadius: 3,
      elevation: 2
    },
    productImage: {
      width: 70,
      height: 70,
      marginRight: 12,
      borderRadius: 8
    },
    productInfo: {
      flex: 1,
      justifyContent: 'space-between'
    },
    productName: {
      fontWeight: 'bold',
      fontSize: 14,
      color: '#111',
      marginBottom: 4
    },
    productDetails: {
      fontSize: 12,
      color: '#555'
    },
    productProfit: {
      color: '#28a745',
      fontWeight: 'bold',
      fontSize: 13,
      marginTop: 4
    }
  });

  export default OrderDetailsScreen;
