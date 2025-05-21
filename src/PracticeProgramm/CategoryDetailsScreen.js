import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryDetailsScreen({ route }) {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to the</Text>
      <Text style={styles.title}>{title} Category</Text>
      <Text style={styles.description}>
        Explore the best products and offers in the {title} category.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  welcome: {
    fontSize: 18,
    marginBottom: 5,
    color: '#555',
  },
  title: { 
    fontSize: 26, 
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
