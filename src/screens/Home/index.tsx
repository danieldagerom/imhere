import {  Text, View, TextInput, TouchableOpacity  } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home(){
  function handleParticipantAdd() {
    console.log('voce clicou no botão de adicionar!')
  }

  function handleParticipantRemove(name:string) {
    console.log(`voce clicou em remover ${name}`)

  }

  return(
    <View style={styles.container}>
    <Text style={styles.eventName}> 
      Nome do evento 
    </Text>

    <Text style={styles.eventDate}> 
      Sexta, 4 de Novembro de 2022 
    </Text>

    <View style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder='Nome do participante'
        placeholderTextColor="#6B6B6B"
      />

      <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
    </View>

    <Participant name="Rodrigo" onRemove={() => handleParticipantRemove("Jeff")}/>
  
    </View>
  )
}
