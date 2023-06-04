import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


export default function Cadastro({navigation}) {
  
  const [colors, setColors] = useState({
    card1: '#6A441E',
    card2: '#6A441E'
  });

  const handleCard1Press = () => {
    if(colors.card1 !== '#CC6600') {
      setColors({
        card1: '#CC6600',
        card2: '#6A441E'
      });
    } else {
      setColors({
        card1: '#6A441E',
        card2: '#6A441E'
      });
    }
  };

  const handleCard2Press = () => {
    if (colors.card2 !== '#CC6600') {
      setColors({
        card1: '#6A441E',
        card2: '#CC6600'
      });
    } else {
      setColors({
        card1: '#6A441E',
        card2: '#6A441E'
      });
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
            style={[styles.card, { backgroundColor: colors.card1 }]}
            onPress={handleCard1Press}
          >
            <Text style={styles.textSelect}>Sou cliente</Text>
            
            <Icon 
              name={"account"} 
              size={40} 
              color={'#fff'} 
              style={styles.icon}
            />
          </TouchableOpacity>

          <TouchableOpacity 
            style={[styles.card, { backgroundColor: colors.card2 }]}
            onPress={handleCard2Press}
          >
            <Text style={styles.textSelect}>Sou barbeiro</Text>

            <Icon 
              name={"email"} 
              size={35} 
              color={'#fff'} 
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.facaLogin}>
          <Text style={styles.possuiConta}> Já possui uma conta?</Text> 
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={styles.textBold}>Faça login</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity 
         style={styles.button}
         onPress={() => navigation.navigate('Inicio')}
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
    fontWeight: 'bold'
  },
  barra: {
    height: 3,
    width: 220,
    borderRadius: 100,
    backgroundColor: '#CC6600'
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
  },
  textSelect: {
    textAlign: 'center', 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  icon: {
    position: 'absolute',
    justifyContent: 'center',
    left: 30,
  },
  facaLogin: {
    top: '20%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  possuiConta: {
    color: "#fff",
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
    top: '30%',
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