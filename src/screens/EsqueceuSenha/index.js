import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Input from '../../components/Input';


export default function EsqueceuSenha() {

  const [email, setEmail] = useState(null)

  return (
    <SafeAreaView style = {styles.container}>
      
      <View style={styles.centeredView}>

        <View style={styles.container2}>
          <Text style={styles.redefinirSenha}>Redefinir senha</Text>
          <View style={styles.barra}></View>
        </View>

        <Text style={styles.descricao}>Esqueceu sua senha? Informe o email utilizado no seu cadastro que lhe ajudaremos a definir uma nova senha.</Text>

        <Input 
          iconName={"email"} 
          placeholder="E-mail"
          autoCapitalize="none"
          onChangeText={value => setEmail(value)}
          autoCorrect={false}
          keyboardType="email-address"
        />

        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View> 
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2A17',
  },
  centeredView: {
    top: '10%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    marginLeft: '-50%',
  },
  redefinirSenha: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold',
    borderBottomColor: '#CC6600',
    borderBottomWidth: 2,
  },
  descricao: {
    top: '7%',
    color: 'white',
    width: '85%'
  },
  barra: {
    height: 3,
    width: 130,
    borderRadius: 100,
    backgroundColor: '#CC6600'
  },
  button: {
    backgroundColor: '#CC6600',
    width: '85%',
    height: 50,
    justifyContent: 'center',
    top: '230%',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});