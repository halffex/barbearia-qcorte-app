import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import BarberCard from './BarberCard';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Barberprox = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardPress = (index) => {
    setSelectedCardIndex(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Barbearias Próximas</Text>

      <View style={styles.cardContainer}>
        <BarberCard
          imageSource={require('../../../assets/barbearia-9.png')}
          barberName="Barbearia 1"
          rating="4.5"
          selected={selectedCardIndex === 0}
          onPress={() => handleCardPress(0)}
        />
        <BarberCard
          imageSource={require('../../../assets/barbearia-9.png')}
          barberName="Barbearia 2"
          rating="2.8"
          selected={selectedCardIndex === 1}
          onPress={() => handleCardPress(1)}
        />
        <BarberCard
          imageSource={require('../../../assets/barbearia-9.png')}
          barberName="Barbearia 3"
          rating="3.6"
          selected={selectedCardIndex === 2}
          onPress={() => handleCardPress(2)}
        />
        <BarberCard
          imageSource={require('../../../assets/barbearia-9.png')}
          barberName="Barbearia 4"
          rating="1.4"
          selected={selectedCardIndex === 3}
          onPress={() => handleCardPress(3)}
        />
      </View>

      {/* Barra laranja */}
      <View style={styles.orangeBar}>
        <Icon name="chevron-left" size={30} color="white" style={styles.barIcon} />
        <Icon name="chevron-right" size={30} color="white" style={styles.barIcon} />
      </View>
    </View>
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
    color: 'white',
    fontSize: 23,
    textAlign: 'center',
    marginLeft: -35,
    marginRight: 105,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    borderBottomColor: '#CC6600',
    marginTop: -180,
    margin: 110,
  },
  cardContainer: {
    flexDirection: 'column',
  },
  orangeBar: {
    backgroundColor: '#CC6600',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  barIcon: {
    marginLeft: 10,
    marginRight: 10,
  },
});

export default Barberprox;