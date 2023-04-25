import { 
  StyleSheet, 
  TextInput, 
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default function Input(props) {

  return (
    <View style={styles.formsContainer}>
      <TextInput 
        style={styles.input}
        underlineColorAndroid="transparent"
        placeholder="Email ou telefone" 
        placeholderTextColor={'#fff'}
        secureTextEntry={props.secureTextEntry}
      />
      <Icon 
        name='email' 
        size={20} 
        color={'#CC6600'} 
        style={styles.icon} 
      />
      <TouchableOpacity>
        <Icon 
          name='eye' 
          size={20} 
          color={'#fff'} 
          style={styles.iconSecrety} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formsContainer: {
    top: 70,
    flexDirection: 'row',
    marginTop: 15,
  },
  input: {
    height: 40,
    width: 300,
    flex: 1,
    paddingLeft: 50,
    marginHorizontal: 20,
    borderRadius: 5,
    fontSize: 14,
    borderColor: '#CC6600',
    borderWidth: 1,
  },
  icon: {
    position: 'absolute',
    left: 30,
    top: 10,
  },
  iconSecrety: {
    position: 'absolute',
    right: 30,
    top: 10,
  },
});