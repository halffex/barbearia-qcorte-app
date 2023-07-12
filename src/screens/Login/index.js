import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// import { firebase } from '@react-native-firebase/auth';

import Input from '../../components/Input';

export default function Login({ navigation }) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const userCredential = await firebase.auth().signInWithEmailAndPassword(email, password);
      const user = userCredential.user;
      console.log('Usuário autenticado:', user.uid);
      // Aqui você pode redirecionar o usuário para a próxima tela do aplicativo após o login bem-sucedido
    } catch (error) {
      console.log('Erro de autenticação:', error);
      // Aqui você pode exibir uma mensagem de erro para o usuário na tela de login
    }
  };

  const handleSignup = () => {
    // Aqui você pode adicionar a lógica para redirecionar o usuário para a tela de cadastro
    navigation.navigate('Cadastro');
  };

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar style="light" />

      <View style={styles.centeredView}>
        <View style={styles.backgroundLogo}>
          
        </View>
        <Input 
          iconName={"email"} 
          placeholder="E-mail"
          autoCapitalize="none"
          onChangeText={setEmail}
          value={email}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <Input 
          iconName={"key-variant"} 
          secureTextEntry 
          autoCorrect={false}
          onChangeText={setPassword}
          value={password}
          placeholder="Senha"
          autoCapitalize="none"
          keyboardType="default"
        />
        <TouchableOpacity 
          style={styles.esqueceu}
          onPress={() => navigation.navigate('EsqueceuSenha')}
        >
          <Text style={styles.textEsqueceu}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <View style={styles.facaCadastro}>
          <Text style={styles.criarConta}>Não possui conta?</Text>
          <TouchableOpacity 
            // onPress={() => navigation.navigate('Cadastro')}
            onPress={handleSignup}
          >
            <Text style={styles.textBold}>Faça seu cadastro</Text>
          </TouchableOpacity>
        </View>
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
  backgroundLogo: {
    backgroundColor: '#CC6600',
    borderRadius: 100,
    width: 130,
    height: 130,
  },
  logo: {
    width: 100,
    height: 100,
    top: 15,
    left: 15,
  },
  esqueceu: {
    top: '40%',
    alignSelf: 'flex-end'
  },
  textEsqueceu: {
    color: '#fff',
    right: '8%'
  },
  button: {
    backgroundColor: '#CC6600',
    width: '85%',
    height: 50,
    justifyContent: 'center',
    top: '50%',
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
  facaCadastro: {
    top: '60%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  criarConta: {
    color: "#fff",
    fontSize: 15,
  },
  textBold: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#CC6600',
    left: 5,
  },
});
