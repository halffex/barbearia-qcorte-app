import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Input from '../../components/Input';


const CadastroUsuario = ({navigation}) => {

  const [name, setName] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)


  return (

    
    <View style = {styles.container}>
      
      <View style={styles.centeredView}>

      <Text style={styles.textoPerfil}>Perfil</Text>



        <Input 
          placeholder="Nome"
          autoCapitalize="none"
          onChangeText={value => setName(value)}
          autoCorrect={false}
          keyboardType="default"
        />
        <Input 
          placeholder="((XX) XXXXX-XXXX)"
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

        <TouchableOpacity 
          style={styles.button}
          onPress={() => navigation.navigate('CadastroUsuario')}
        >
          <Text style={styles.buttonText}>Criar Conta</Text>
        </TouchableOpacity>
      </View> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2A17',
  },
  textoPerfil: {
    textAlign: 'center', 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold',
    borderBottomColor: '#CC6600',
    borderBottomWidth: 2,
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
  esqueceu: {
    color: '#fff',
    top: '800%',
    left: 115,
  },
  button: {
    backgroundColor: '#CC6600',
    width: '85%',
    height: 50,
    justifyContent: 'center',
    top: '80%',
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

export default CadastroUsuario;
