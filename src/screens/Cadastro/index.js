import React from 'react';
import Input from '../../components/Input';
import Button from '../../components/button';
import { 
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const Cadastro = () => {

    return(

        <View style = {styles.container}>

            <View style = {styles.containerPerfil}>

                <Text>Selecione seu perfil</Text>

            </View>

            <View style = {styles.selecao}>

                <button style = {styles.user}>Sou cliente</button>
                <button style = {styles.barber}>Sou barbeiro</button>

            </View>
            <View style={styles.facaCadastro}>
            <Text style={styles.criarConta}>
                Ja possui uma conta?
                <TouchableOpacity>
                <Text 
                    style={styles.textBold}>Faça login</Text>
                </TouchableOpacity>
            </Text>
            </View>

            <Button />


        </View>
    );
}

const styles = StyleSheet.create({
    container:{

    }
})

export default Cadastro;