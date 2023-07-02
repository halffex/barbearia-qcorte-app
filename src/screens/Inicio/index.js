import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BarberCard from './BarberCard';
import Agendamento from '../Agendamento';


export default function Inicio({ navigation }) {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardPress = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <SafeAreaView style={styles.container}>

      <Text style={styles.title}>Barbearias Próximas</Text>
      <View style={styles.barra}></View>

      <View style={styles.cardContainer}>
        <BarberCard
          imageSource={require('../../../src/assets/icone-barbearia.png')}
          barberName="Barbearia 1"
          rating="4.5"
          selected={selectedCardIndex === 0}
          onPress={() => navigation.navigate('Agendamento')}
        />
        <BarberCard
          imageSource={require('../../../src/assets/icone-barbearia.png')}
          barberName="Barbearia 2"
          rating="2.8"
          selected={selectedCardIndex === 1}
          onPress={() => navigation.navigate('Agendamento')}
        />
        <BarberCard
          imageSource={require('../../../src/assets/icone-barbearia.png')}
          barberName="Barbearia 3"
          rating="3.6"
          selected={selectedCardIndex === 2}
          onPress={() => navigation.navigate('Agendamento')}
        />
        <BarberCard
          imageSource={require('../../../src/assets/icone-barbearia.png')}
          barberName="Barbearia 4"
          rating="1.4"
          selected={selectedCardIndex === 3}
          onPress={() => navigation.navigate('Agendamento')}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2A17',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 23,
    marginLeft: -35,
    marginRight: 105,
    fontWeight: 'bold',
    marginTop: -180,
    margin: 100,
  },
  barra: {
    position: 'absolute',
    height: 3,
    width: 195,
    left: 27,
    top: 128,
    borderRadius: 100,
    backgroundColor: '#CC6600'
  },
  cardContainer: {
    flexDirection: 'column',
  }
});