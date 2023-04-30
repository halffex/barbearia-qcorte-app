import { React, useState } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';


import Input from '../../components/Input';
import Button from '../../components/button';

const Login = () => {
  const [email, setEmail] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.backgroundLogo}>
          <Image 
            style={styles.logo}
            // source={require('/src/images/logo.png')}
          />
        </View>
        <Input 
          iconName={"email"} 
          placeholder="E-mail"
          autoCapitalize="none"
          onChangeText={setEmail}
          autoCorrect={false}
          keyboardType="email-address"
        />
        <Input 
          iconName={"key-variant"} 
          secureTextEntry 
          autoCorrect={false}
          placeholder="Senha"
          autoCapitalize="none"
          keyboardType="default"
        />
        <TouchableOpacity>
          <Text style={styles.esqueceu}>Esqueceu a senha?</Text>
        </TouchableOpacity>

        <Button />

        <View style={styles.facaCadastro}>
          <Text style={styles.criarConta}>
            Não possui conta? 
            <TouchableOpacity>
              <Text 
                style={styles.textBold}>Faça seu cadastro</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2A17',
  },
  centeredView: {
    top: 140,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundLogo: {
    backgroundColor: '#CC6600',
    borderRadius: '100%',
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
    color: '#fff',
    top: 130,
    left: 115,
    width: 130,
  },
  facaCadastro: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: 320,
  },  
  criarConta: {
    color: "#fff",
    position: 'absolute',
    textAlign: 'center',
    fontSize: 15,
  },
  textBold: {
    fontSize: 15,
    fontWeight: 'bold',
    left: 7,
    top: 3,
    color: '#CC6600'
  }
});

export default Login;