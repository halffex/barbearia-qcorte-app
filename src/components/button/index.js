import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = () => (
  <TouchableOpacity 
    style={styles.button}
  >
    <Text style={styles.buttonText}>Login</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#CC6600',
    width: 354,
    height: 50,
    padding: 16,
    top: 200,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  }
});

export default Button;