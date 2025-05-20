import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import Orders from './Orders';
import OrderDetailsScreen from './OrderDetailsScreen';
import WalletScreen from './WalletScreen';

export default function App(){

    return(
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>{renderScreen()}</View>

      
      <View style={styles.bottomBar}>
        <TouchableOpacity onPress={() => setSelected('Home')} style={styles.iconButton}>
          <Icon name={selected === 'Home' ? 'home' : 'home-outline'} size={30} color={selected === 'Home' ? 'tomato' : 'gray'} />
          <Text style={{ color: selected === 'Home' ? 'tomato' : 'gray' }}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelected('Orders')} style={styles.iconButton}>
          <Icon name={selected === 'Orders' ? 'list' : 'list-outline'} size={30} color={selected === 'Orders' ? 'tomato' : 'gray'} />
          <Text style={{ color: selected === 'Orders' ? 'tomato' : 'gray' }}>Orders</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelected('OrderDetails')} style={styles.iconButton}>
          <Icon name={selected === 'OrderDetails' ? 'document' : 'document-outline'} size={30} color={selected === 'OrderDetails' ? 'tomato' : 'gray'} />
          <Text style={{ color: selected === 'OrderDetails' ? 'tomato' : 'gray' }}>Details</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setSelected('Wallet')} style={styles.iconButton}>
          <Icon name={selected === 'Wallet' ? 'wallet' : 'wallet-outline'} size={30} color={selected === 'Wallet' ? 'tomato' : 'gray'} />
          <Text style={{ color: selected === 'Wallet' ? 'tomato' : 'gray' }}>Wallet</Text>
        </TouchableOpacity>
      </View>

            
        </View>
    );
}

const styles = StyleSheet.create({

});