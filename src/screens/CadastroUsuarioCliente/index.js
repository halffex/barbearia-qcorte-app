import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Input from '../../components/Input';


export default function CadastroUsuarioCliente() {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

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
          value={nome}
          onChangeText={setNome}
          autoCorrect={false}
          keyboardType="default"
        />
        <Input 
          placeholder="(XX) XXXXX-XXXX"
          autoCapitalize="none"
          value={telefone}
          onChangeText={setTelefone}
          autoCorrect={false}
          keyboardType="default"
        />
        <Input 
          placeholder="E-mail"
          autoCapitalize="none"
          value={email}
          onChangeText={setEmail}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <Input 
          secureTextEntry 
          autoCorrect={false}
          value={senha}
          onChangeText={setSenha}
          placeholder="Senha"
          autoCapitalize="none"
          keyboardType="default"
        />
        <Input 
          secureTextEntry 
          autoCorrect={false}
          value={confirmarSenha}
          onChangeText={setConfirmarSenha}
          placeholder="Confirmar senha"
          autoCapitalize="none"
          keyboardType="default"
          // returnKeyType="done"
        />

        <TouchableOpacity 
          style={styles.button}
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