
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function HomeScreen() {
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")

    const onPress = () => {
      router.push("/(tabs)")
    }

  return (
  <SafeAreaView>
    <Text>Login...</Text>
    <Text>Email</Text>
    <TextInput style={styles.input} onChangeText={setEmail} value={email} placeholder="Digite seu email " />
    <Text>Senha</Text>
    <TextInput style={styles.input} onChangeText={setSenha} value={senha} placeholder='Digite sua senha '  />

    <View>
        <TouchableOpacity style={styles.buttom} onPress={onPress}>
                <Text style={styles.btnText}>ENTRAR</Text>
        </TouchableOpacity>
        <View>
            <Link href={"/#"}>Cadrastar novo usuario</Link>
        </View>
    </View>
  </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  buttom: {
    backgroundColor: 'black',
  },

   input: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: "#090909",
    color: "#ffffff"
    
   },

   btnText: {
    color: "green"
   }
  });

  
  