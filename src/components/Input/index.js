import React, {useState} from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = (props) => {
  const [sec, setSec] = useState(props.secureTextEntry)
  return (
    <View style={styles.formsContainer}>
      <TextInput 
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email" 
        placeholderTextColor={'#fff'}
        { ... props}
        secureTextEntry={sec}
      />
      <Icon 
        name={props.iconName} 
        size={24} 
        color={'#CC6600'} 
        style={styles.icon} 
      />
      {props.secureTextEntry && (
        <TouchableOpacity onPress={() => setSec(!sec)}>
          <Icon 
            name={sec ? 'eye' : 'eye-off'} 
            size={24} 
            color={'#fff'} 
            style={styles.iconSecrety} 
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  formsContainer: {
    top: '30%',
    flexDirection: 'row',
    marginTop: 15,
  },
  input: {
    height: 50,
    flex: 1,
    paddingLeft: 60,
    marginHorizontal: 30,
    fontSize: 14,
    borderBottomColor: '#CC6600',
    borderBottomWidth: 2,
    color: '#fff',
  },
  icon: {
    position: 'absolute',
    left: 45,
    top: 14,
  },
  iconSecrety: {
    position: 'absolute',
    right: 40,
    top: 14,
  },
});

export default Input