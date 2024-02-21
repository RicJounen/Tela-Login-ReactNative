import React from "react";
import { SafeAreaView, TextInput, View, TouchableOpacity, Image, Text } from "react-native";
import {useNavigation} from '@react-navigation/native';
import { StyleLogin } from "../Style";

const Login = () => {
  const navigation = useNavigation();
  const [Username, setUsername] = React.useState('');
  const [Senha, setSenha] = React.useState(''); 
  
  const handleLogin = () => {
    // Lógica de autenticação aqui (exemplo simples)
    if (Username === 'Usuario' && Senha === 'senha') {
        // Autenticação bem-sucedida, navegue para a próxima tela
        navigation.navigate('TelaHome');
      } else {
        // Exibir mensagem de erro ou tomar outra ação em caso de falha na autenticação
        alert('Credenciais inválidas');
      }
    };


  return (
    <SafeAreaView style={StyleLogin.centro}>
       <Image style={StyleLogin.imagem}
       source={('./assets/ApexLogo.png')}
       ></Image> 
       <View style={StyleLogin.quadrado}>
      <TextInput
      style={StyleLogin.input}
      onChangeText={setUsername}
      value={Username}
      placeholder='Usuario'
      fontSize= {25}
      />
      <TextInput
      style={StyleLogin.input2}
      onChangeText={setSenha}
      value={Senha}
      placeholder='Senha'
      keyboardType='numeric'
      />
        <TouchableOpacity style={StyleLogin.button} onPress={handleLogin}>
        <Text>Entrar</Text>
      </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;