import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Input from '../../components/Input';


export default function CadastroUsuarioCliente({ navigation }) {

  const [name, setName] = useState(null)

  const [telefone, setTelefone] = useState(null)

  const [email, setEmail] = useState(null)

  const [password, setPassword] = useState(null)

  return (

    
    <SafeAreaView style = {styles.container}>
      
      <View style={styles.centeredView}>

        <View style={styles.container2}>
          <Text style={styles.textoPerfil}>Criar conta</Text>
          <View style={styles.barra}></View>
        </View>

        <Input 
          placeholder="Nome"
          autoCapitalize="none"
          onChangeText={value => setName(value)}
          autoCorrect={false}
          keyboardType="default"
        />
        <Input 
          placeholder="(XX) XXXXX-XXXX"
          autoCapitalize="none"
          onChangeText={value => setTelefone(value)}
          autoCorrect={false}
          keyboardType="default"
        />
        <Input 
          placeholder="E-mail"
          autoCapitalize="none"
          onChangeText={value => setEmail(value)}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <Input 
          secureTextEntry 
          autoCorrect={false}
          onChangeText={value => setPassword(value)}
          placeholder="Senha"
          autoCapitalize="none"
          keyboardType="default"
        />
        <Input 
          secureTextEntry 
          autoCorrect={false}
          onChangeText={value => setPassword(value)}
          placeholder="Confirmar senha"
          autoCapitalize="none"
          keyboardType="default"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('CadastroUsuario')}
        >
          <Text style={styles.buttonText}>Criar conta</Text>
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
    top: '5%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    marginLeft: '-60%',
  },
  textoPerfil: { 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold',
    borderBottomColor: '#CC6600',
    borderBottomWidth: 2,
  },
  barra: {
    height: 3,
    width: 90,
    borderRadius: 100,
    backgroundColor: '#CC6600'
  },
  button: {
    backgroundColor: '#CC6600',
    width: '85%',
    height: 50,
    justifyContent: 'center',
    top: '70%',
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