import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = ({  children,style }) => {
  return (
    <View style={[ style,styles.box]}>
      <Text style={styles.text}>{children}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    width:"auto",
    height: "auto",
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Box;
