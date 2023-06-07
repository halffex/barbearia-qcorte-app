import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BarberCard = ({ imageSource, barberName, rating, selected, onPress }) => {
  const renderRatingStars = () => {
    const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);
    return stars;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.cardContainer, selected && styles.selectedCard]}>
        <View style={styles.cardContent}>
          <Image source={imageSource} style={styles.barberImage} />
          <View style={styles.cardText}>
            <Text style={[styles.barberName, selected && styles.selectedText]}>{barberName}</Text>
            <Text style={[styles.rating, selected && styles.selectedText]}>Nota: {renderRatingStars()}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 360,
    height: 90,
    backgroundColor: '#6a441e',
    borderRadius: 7,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  selectedCard: {
    backgroundColor: '#CC6600',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  cardText: {
    marginLeft: 10,
    marginRight: 120,
  },
  barberImage: {
    width: 40,
    height: 40,
    marginLeft: -30,
    marginRight: 10,
  },
  barberName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
    color: '#f5f2f0',
  },
  rating: {
    fontSize: 14,
    textAlign: 'center',
    color: '#f5f2f0',
  },
  selectedText: {
    color: '#fff',
  },
});

export default BarberCard;