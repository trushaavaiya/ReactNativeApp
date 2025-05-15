import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const orders = [
  {
    id: '1',
    status: 'Pending Shipping Company',
    name: 'Trusha',
    date: '15 April 2025',
    products: 1,
    bgColor: '#FEEBCB',
  },
  {
    id: '2',
    status: 'Delivery in Progress',
    name: 'Trusha avaiya',
    date: '14 April 2025',
    products: 2,
    bgColor: '#EEE0FB',
  },
  {
    id: '3',
    status: 'Delivered',
    name: 'E-commerce',
    date: '14 April 2025',
    products: 3,
    bgColor: '#DFFFD6',
  },
];

const Tabs = ['All', 'Delivered', 'Delivery in Progress', 'Pending Shipping Company'];

export default function Orders() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <View style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Orders</Text>
        <View style={styles.iconGroup}>
          <Ionicons name="notifications-outline" size={24} color="#000" style={{ marginRight: 16 }} />
          <Ionicons name="cart-outline" size={24} color="#000" />
        </View>
      </View>

      <View style={styles.tabContainer}>
        {Tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            onPress={() => setActiveTab(tab)}
            style={[styles.tabButton, activeTab === tab && styles.activeTabButton]}
          >
            <Text style={[styles.tab, activeTab === tab && styles.activeTab]}>
              {tab}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.searchcontainer}>
        <Ionicons name="search" size={20} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search orders by name, no, etc"
          placeholderTextColor="#999"
        />
      </View>

      <FlatList
        data={orders.filter(order => activeTab === 'All' || order.status === activeTab)}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.orderCard}>
            <View style={styles.rowBetween}>
              <Text style={[styles.statusText, { backgroundColor: item.bgColor }]}>
                {item.status}
              </Text>
              <View style={styles.row}>
                <Ionicons name="calendar-outline" size={14} color="#444" style={styles.icon} />
                <Text style={styles.dateText}>{item.date}</Text>
              </View>
            </View>

            <View style={styles.rowClose}>
              <Ionicons name="gift-outline" size={30} color="#00B894" />
              <Text style={[styles.orderNumber, { marginLeft: 8 }]}>#{item.id.padStart(10, '0')}</Text>
            </View>

            <View style={styles.rowBetween}>
              <View style={[styles.row, { alignItems: 'center' }]}>
                <Ionicons name="person-outline" size={16} color="#444" style={styles.icon} />
                <Text style={styles.orderText}>{item.name}</Text>
              </View>
              <View style={styles.row}>
                <MaterialIcons name="production-quantity-limits" size={16} color="#444" style={styles.icon} />
                <Text style={styles.orderText}>{item.products} Products</Text>
              </View>
            </View>

            <TouchableOpacity style={styles.detailsButton}>
              <Text style={styles.detailsButtonText}>Show Details</Text>
            </TouchableOpacity>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 80 }}
      />

      <View style={styles.bottomNav}>
        <TouchableOpacity>
          <Ionicons name="home-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="search-outline" size={24} color="#999" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="list-outline" size={24} color="#00B894" />
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="person-outline" size={24} color="#999" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flex: 1,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginHorizontal: 5,
    borderRadius: 20,
    backgroundColor: '#f3f3f3',
  },
  activeTabButton: {
    backgroundColor: '#00B894',
  },
  tab: {
    fontSize: 16,
    color: '#555',
  },
  activeTab: {
    color: '#fff',
    fontWeight: 'bold',
  },
  searchcontainer: {
    flexDirection: "row",
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    width: '100%',
    alignSelf: 'center',
  },
  searchInput: {
    flex: 1,
    height: 40,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 5,
    padding: 10,
  },
  orderCard: {
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
    elevation: 2,
    width:"99%",
    justifyContent:"center",
    alignSelf:"center"
  },
  statusText: {
    fontWeight: 'bold',
    fontSize: 13,
    color: '#444',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
    overflow: 'hidden',
  },
  dateText: {
    color: '#444',
    fontSize: 13,
  },
  orderNumber: {
    fontWeight: 'bold',
    color: '#444',
    fontSize: 14,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 6,
  },
  rowClose: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 6,
  },
  icon: {
    marginRight: 6,
  },
  orderText: {
    color: '#444',
    fontSize: 14,
  },
  detailsButton: {
    backgroundColor: '#00B894',
    paddingVertical: 6,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  detailsButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
});
