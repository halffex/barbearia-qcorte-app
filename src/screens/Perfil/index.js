import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import * as ImagePicker from 'expo-image-picker';


const Perfil = () => {

  const handleImageUser = () => {
    setShowInitialImage(false);
    Alert.alert(
      "Selecione",
      "Informe de onde você quer pegar a foto",
      [
        {
          text: "Galeria",
          onPress: () => galery(),
          style: "default"
        },
        {
          text: "Camera",
          onPress: () => camera(),
          style: "default"
        },
      ],
    )
  };

  const [selectedImage, setSelectedImage] = useState(null);
  const [showInitialImage, setShowInitialImage] = useState(true);

  useEffect(() => {
    (async () => {
      const { status } = await ImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Desculpe, precisamos da permissão da câmera para isso funcionar!');
      } else {
        const { status: libraryStatus } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (libraryStatus !== 'granted') {
          alert('Desculpe, precisamos da permissão do rolo da câmera para isso funcionar!');
        }
      }
    })();
  }, []);

  const galery = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };

  const camera = async () => {
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setSelectedImage(result.uri);
    }
  };


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.centeredView}>
        <View style={styles.perfil}>
          <Text style={styles.textPerfil}>Perfil</Text>
          <View style={styles.barra}></View>
        </View>

        <View>
          <TouchableOpacity onPress={handleImageUser} style={styles.imageContainer}>
            {selectedImage ? (
              <Image source={{ uri: selectedImage }} style={styles.image} />
            ) : (
              <Text style={styles.placeholderText}>Clique aqui para mudar de foto</Text>
            )}
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  perfil: {
    marginBottom: '10%',
    marginTop: '10%',
  },
  textPerfil: {
    textAlign: 'center', 
    color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold'
  },
  barra: {
    height: 3,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#CC6600'
  },
  imageContainer: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 5,
    borderColor: '#CC6600',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  placeholderText: {
    top: '35%',
    color: 'gray',
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default Perfil;