import { SafeAreaView, View, Text, StyleSheet, Pressable, TextInput, Image } from 'react-native'
import { useState } from 'react'

function App () {

  const [cpf,setCpf] = useState('')
  const [cpfField, setCpfField] = useState('')

  function sendCpf() {
    setCpf(cpfField)
  }

  function clearCpf(){
    setCpf('')
    setCpfField('')
  }

  return (
    <SafeAreaView style={styles.exibicao}>

     {
        cpf == '' &&
        <View>
        <Image style={styles.image}
          source={require('./assets/user-icon-on-transparent-background-free-png.webp')}
        />
          <TextInput 
          placeholder="Insira seu CPF aqui"
          placeholderTextColor= '#999'
          style={styles.input}
          value={cpfField}
          onChangeText={
            (text) => setCpfField(text)
          }
        />

        <Pressable onPress={sendCpf}>
          <Text style={styles.text}>Entrar</Text>
        </Pressable>
        </View>
      }

      {cpf=='000.000.000-00' &&

        <View>
        <Image style={styles.imagem}
        source={require('./assets/male-customer-service-3d-cartoon-avatar-portrait (2).png')}
        />
          <Text style={styles.cpf}>
            Usuário logado com o CPF: 000.000.000-00
          </Text>
          
          <Pressable onPress={clearCpf}>
            <Text style={styles.cpf}>Este não é seu CPF? Clique aqui</Text>
          </Pressable>
        </View>
        }

      <View style={styles.container}>

        <Text style={styles.text}>
          {}
        </Text>

      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  exibicao: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  container: {
    justifyContent: 'center',
    width: '80%'
  },
  text: {
    textAlign: 'center',
    fontSize: 19,
    backgroundColor: 'black',
    color: 'white',
    marginLeft: 35,
    marginRight: 35,
    marginTop: 10,
    borderRadius: 15
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 15,
    width: 200,
    height: 30,
    borderWidth: 2,
  },
  image: {
    width:70,
    height:70,
    alignSelf: 'center',
    marginBottom: 7
  },
  imagem: {
    width:150,
    height:150,
    alignSelf: 'center',
    marginBottom: 7
  },
  cpf: {
    backgroundColor: 'black',
    color: 'white',
    alignSelf: 'center',
    marginTop: 2,
    borderRadius:12
  }
})

export default App