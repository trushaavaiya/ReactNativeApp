import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function CategoryDetailsScreen({ route }) {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Category: {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
