import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

export default function Cadastro() {
  const navigation = useNavigation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const handleContinue = () => {
    if (selectedOption === 'cliente') {
      navigation.navigate('CadastroUsuarioCliente');
    } else if (selectedOption === 'barbeiro') {
      navigation.navigate('CadastroUsuarioBarbeiro');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.centeredView}>
        <View style={styles.selecione}>
          <Text style={styles.text}>Selecione um Perfil</Text>
          <View style={styles.barra}></View>
        </View>
        <View style={styles.cards}>
          <TouchableOpacity
            style={[styles.card, selectedOption === 'cliente' ? styles.selectedCard : styles.unselectedCard]}
            onPress={() => handleOptionSelect('cliente')}
          >
            <Text style={styles.textSelect}>Sou cliente</Text>
            <Icon
              name="account"
              size={40}
              color="#fff"
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.card, selectedOption === 'barbeiro' ? styles.selectedCard : styles.unselectedCard]}
            onPress={() => handleOptionSelect('barbeiro')}
          >
            <Text style={styles.textSelect}>Sou barbeiro</Text>
            <Image
              style={styles.foto}
              source={require('../../../src/assets/icone-barbearia.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={styles.facaLogin}>
          <Text style={styles.possuiConta}>Já possui uma conta?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textBold}>Faça login</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[styles.button, !selectedOption && styles.disabledButton]}
          onPress={handleContinue}
          disabled={!selectedOption} // Desativa o botão caso nenhuma opção esteja selecionada
        >
          <Text style={styles.buttonText}>Continuar</Text>
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  selecione: {
    marginBottom: '15%',
    marginTop: '20%',
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 23,
    fontWeight: 'bold',
  },
  barra: {
    height: 3,
    width: 220,
    borderRadius: 100,
    backgroundColor: '#CC6600',
  },
  cards: {
    top: '10%',
    width: '100%',
    alignItems: 'center',
    gap: 25,
  },
  card: {
    justifyContent: 'center',
    width: '85%',
    height: 120,
    borderRadius: 5,
    backgroundColor: '#6A441E', // Alteração: cor de fundo padrão
  },
  selectedCard: {
    backgroundColor: '#CC6600',
  },
  unselectedCard: {
    backgroundColor: '#6A441E',
  },
  textSelect: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    position: 'absolute',
    justifyContent: 'center',
    left: 30,
  },
  foto: {
    width: 40,
    height: 40,
    position: 'absolute',
    marginLeft: 30,
  },
  facaLogin: {
    top: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  possuiConta: {
    color: '#fff',
    fontSize: 15,
  },
  textBold: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#CC6600',
    left: 5,
  },
  button: {
    backgroundColor: '#CC6600',
    width: '85%',
    height: 50,
    justifyContent: 'center',
    top: '40%',
    borderRadius: 5,
  },
  disabledButton: {
    backgroundColor: '#999999', // Alteração: cor de fundo do botão desativado
  },
  buttonText: {
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
});
