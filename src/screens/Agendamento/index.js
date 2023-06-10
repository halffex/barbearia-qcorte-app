import React, { useState }from 'react';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import RatingStars from './stars'

export default function Agendamento() {

    const [selectedItem, setSelectedItem] = useState(null);

    const handleStarPress = (stars) => {
    };
    
    const renderItem = ({ item }) => (
      <TouchableOpacity
        onPress={() => handleItemClick(item)}
        style={[
          styles.item,
          selectedItem === item.id && styles.selectedItem,
        ]}
      >
        <Text style={styles.lista}>{item.title}</Text>
      </TouchableOpacity>
    );
  
    const handleItemClick = (item) => {
      setSelectedItem(item.id);
    };  

    const handleCardPress = () => {
    };

  return (
    <View style={styles.container}>
      <Image 
              style={styles.foto}
              source={require('../../../src/assets/icone-barbearia.png')}
            />
      <Text style={styles.title1}>Barbearia</Text>
      <Star />
      <Text style={styles.title2}>Endereço</Text>
      <Text style={styles.endereço}>Rua das ruas, 00, Centro, Currais Novos -{'\n'}
                                    Rio Grande do Norte, Brasil, CEP 59380-000</Text>
      <Text style={styles.title3}>Sobre</Text>
      <Text style={styles.sobre}>Descrição da barbearia</Text>
      <Text style={styles.title4}>Serviços</Text>
      <Text style={styles.title5}>Avaliação</Text>
      <View style={styles.container2}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
      />
      </View>
      <View style={styles.header}>
      <RatingStars numStars={5} onStarPress={handleStarPress} />
      </View>
      <TouchableOpacity 
         style={styles.button}
         onPress={() => handleCardPress()}
        >
          <Text style={styles.buttonText}>Agendar</Text>
        </TouchableOpacity>
    </View>   
  );
}

const data = [
  { id: 1, title: 'Corte degradê \nR$ 25.00' },
  { id: 2, title: 'Corte degradê + sobrancelha \nR$ 30.00' },
  { id: 3, title: 'Barba \nR$ 15.00' },
];

const Star = () => {
  return (
    <View style={styles.starContainer}>
      <Icon name="star" size={16} color="white" />
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
  container2:{
    flex: 1,
    bottom:-195,
    left: 30
  },
  title1:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC6600',
    left: -42,
    top: 100
  },
  title2:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC6600',
    left: -114,
    top: 150
  },
  title3:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC6600',
    left: -128,
    top: 170
  },
  title4:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC6600',
    left: -117,
    top: 190
  },
  title5:{
    fontSize: 20,
    fontWeight: 'bold',
    color: '#CC6600',
    left: -113,
    top: 310
  },
  starContainer:{
    left: -72,
    top: 105
  },
  foto: {
    top: 102,
    left: 1,
    width: 40, 
    height: 40,
    position: 'absolute',
    marginLeft: 30,
  },
  endereço: {
    fontSize: 13,
    color: '#FFFFFF',
    left: -37,
    top: 148
  },
  sobre: {
    fontSize: 13,
    color: '#FFFFFF',
    left: -89,
    top: 170
  },
  item: {
    width: 140,
    height: 65,
    backgroundColor: '#3D2A17',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderColor: '#CC6600',
    borderWidth: 2,
    borderRadius: 15,
  },
  lista: {
    color: '#FFFFFF',
    fontWeight: 'bold'
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  selectedItem: {
    backgroundColor: '#CC6600', 
  },
  header: {
    top:-70
  },
  button: {
    backgroundColor: '#CC6600',
    width: '85%',
    height: 50,
    justifyContent: 'center',
    top: -42,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    borderRadius: 5,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  }
})
