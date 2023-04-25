import { StyleSheet, View, Image } from 'react-native';

import Input from '../../components/Input';

export default function Login() {
  return (
    <View style={styles.container}>
      <View style={styles.backgroundLogo}>
        <Image 
          style={styles.logo}
          source={require('/src/images/logo.png')}
        />
      </View>
      <Input />
      <Input secureTextEntry={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D2A17',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundLogo: {
    backgroundColor: '#CC6600',
    borderRadius: '50%',
    width: 130,
    height: 130,
  },
  logo: {
    width: 100,
    height: 100,
    top: 15,
    left: 15,
  },
});