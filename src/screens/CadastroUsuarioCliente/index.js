import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import Input from '../../components/Input';

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../services/firebaseConnection';

import { collection, addDoc } from "firebase/firestore";
import { db } from '../../services/firebaseConnection';


export default function CadastroUsuarioCliente({ navigation }) {

  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  async function createUser() {
    await createUserWithEmailAndPassword(auth, email, senha)
    .then(value => {
      console.log('cadastrado com sucesso! \n' + value.user.uid);
    })
    .catch(error => console.log(error));
  };

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
          onChangeText={value => setNome(value)}
          autoCorrect={false}
          keyboardType="default"
        />
        <Input 
          placeholder="(XX) XXXXX-XXXX"
          autoCapitalize="none"
          value={telefone}
          onChangeText={value => setTelefone(value)}
          autoCorrect={false}
          keyboardType="default"
        />
        <Input 
          placeholder="E-mail"
          autoCapitalize="none"
          value={email}
          onChangeText={value => setEmail(value)}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <Input 
          secureTextEntry 
          autoCorrect={false}
          value={senha}
          onChangeText={value => setSenha(value)}
          placeholder="Senha"
          autoCapitalize="none"
          keyboardType="default"
        />
        <Input 
          secureTextEntry 
          autoCorrect={false}
          value={confirmarSenha}
          onChangeText={value => setConfirmarSenha(value)}
          placeholder="Confirmar senha"
          autoCapitalize="none"
          keyboardType="default"
          // returnKeyType="done"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={() => createUser()}
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