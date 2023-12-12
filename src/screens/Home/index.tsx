import {  Text, View, TextInput, TouchableOpacity, ScrollView, Alert  } from 'react-native'

import { Participant } from '../../components/Participant'

import { styles } from './styles'

export function Home(){
  const participants = ['Daniel', 'John', 'Marcos', 'Petghazi', 'Johny', 'Eduardo', 'Clebert', 'absurdo', 'Cleitino', 'Comembolo', 'aluizio', 'frank sinatra']

  function handleParticipantAdd() {
    if (participants.includes("Daniel")){
      return Alert.alert("Novo", "Já existe o participante na lista com esse nome")
    }
  }

  function handleParticipantRemove(name:string) {
    Alert.alert("Remover", `"Remover o participante ${name}"`)

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
    <ScrollView>
      {
        participants.map((participant) => (
          <Participant key={participant} name={participant} onRemove={() => handleParticipantRemove("Jeff")}/>
        ))
      }
    </ScrollView>
    </View>
  )
}
