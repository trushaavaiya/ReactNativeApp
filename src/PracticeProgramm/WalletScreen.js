import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';


const WalletScreen = () => {
  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.pageTitle}>Wallet</Text>

      
      <View style={styles.card}>
        <Text style={styles.label}>Withdrawable Profit</Text>
        <Text style={styles.amount}>730 EGP</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>↘️ Withdraw balance</Text>
        </TouchableOpacity>
      </View>

      
      <View style={styles.expectedProfit}>
        <Text style={styles.expectedLabel}>Expected Profit</Text>
        <Text style={styles.expectedDesc}>Delivered orders didn’t pass 7 days</Text>
        <View style={styles.expectedRow}>
          <Text style={styles.expectedAmount}>4000 EGP</Text>
          <Text style={styles.expectedNote}>15 Orders</Text>
        </View>
      </View>

      
      <Text style={styles.sectionTitle}>Recent Transactions</Text>

      {transactions.map((tx, index) => (
        <View key={index} style={styles.transaction}>
          <View style={styles.txRow}>
            <Text style={styles.txText}>
              {tx.name} ({tx.number})
            </Text>
            <Text style={styles.txAmountRed}>-{tx.amount} EGP</Text>
          </View>
          <View style={styles.txRow}>
            <Text style={styles.txDate}>{tx.date}</Text>
            <Text style={tx.status === 'Succeeded' ? styles.txStatusGreen : styles.txStatusRed}>
              {tx.status}
            </Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};


const transactions = [
  {
    name: 'Vodafone Cash',
    number: '01032343535',
    amount: 300,
    date: 'Tue, 27 April 2021',
    status: 'Succeeded',
  },
  {
    name: 'Bank Transfer',
    number: '01032343535',
    amount: 300,
    date: 'Tue, 27 April 2021',
    status: 'Refused',
  },
  {
    name: 'Bank Transfer',
    number: '01032343535',
    amount: 300,
    date: 'Tue, 27 April 2021',
    status: 'Succeeded',
  },
  {
    name: 'Vodafone Cash',
    number: '01032343535',
    amount: 300,
    date: 'Tue, 27 April 2021',
    status: 'Succeeded',
  },
];

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#ffffff',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#d7f3ef',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: '#555',
  },
  amount: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  button: {
    backgroundColor: '#50c2b4',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    
  },
  expectedProfit: {
    backgroundColor: '#fff7e2',
    padding: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  expectedLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  expectedRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  expectedAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ff9900',
  },
  expectedNote: {
    fontSize: 14,
    color: '#777',
  },
  expectedDesc: {
    fontSize: 12,
    color: '#777',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  transaction: {
    backgroundColor: '#f5f5f5',
    padding: 14,
    borderRadius: 10,
    marginBottom: 10,
  },
  txRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txText: {
    fontSize: 14,
    color: '#333',
  },
  txAmountRed: {
    fontSize: 16,
    color: '#e53935',
    fontWeight: 'bold',
  },
  txDate: {
    fontSize: 12,
    color: '#999',
  },
  txStatusGreen: {
    fontSize: 12,
    color: '#4caf50',
    fontWeight: 'bold',
  },
  txStatusRed: {
    fontSize: 12,
    color: '#e53935',
    fontWeight: 'bold',
  },
});

export default WalletScreen;
