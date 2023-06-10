import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingStars = ({ numStars, onStarPress }) => {
  const [selectedStars, setSelectedStars] = useState(0);

  const handleStarPress = (star) => {
    setSelectedStars(star);
    onStarPress(star);
  };

  const renderStar = (star) => {
    const isFilled = star <= selectedStars;
    return (
      <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
        <Icon
          name={isFilled ? 'star' : 'star-o'}
          size={50}
          color={isFilled ? 'white' : '#CC6600'}
        />
      </TouchableOpacity>
    );
  };

  return <View style={styles.container}>{Array(numStars).fill().map((_, index) => renderStar(index + 1))}</View>;
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default RatingStars;