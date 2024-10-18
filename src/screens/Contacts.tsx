import { useState } from 'react'
import { Text, View, StyleSheet, Button, TextInput } from 'react-native'

import { colors } from '../colors'

export function Contacts() {
  const [name, onChangeName] = useState('')
  const [mail, onChangeMail] = useState('')
  const [phone, onChangePhone] = useState('')
  const [text, onChangeText] = useState('')

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
      }}
    >
      <Text style={styles.title}>Contatos</Text>
      <Text style={styles.subtitle}>Endereço:</Text>
      <Text style={styles.description}>
        R. Mathias Velho, 255 - Centro, Canoas - RS, 92310-300
      </Text>
      <Text style={styles.subtitle}>Telefone:</Text>
      <Text style={styles.description}>+55 51 9840-3596</Text>

      <Text style={styles.subtitle}>Entre em contato:</Text>
      <Text style={styles.formDescription}>
        Preencha o formulário abaixo e um de nossos consultores entrará em
        contato.
      </Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Nome"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeMail}
        value={mail}
        placeholder="E-mail"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePhone}
        value={phone}
        placeholder="Telefone"
        keyboardType="numeric"
      />
      <TextInput
        editable
        multiline
        numberOfLines={4}
        maxLength={40}
        onChangeText={text => onChangeText(text)}
        value={text}
        style={styles.input}
        placeholder="Digite sua mensagem aqui"
      />
      <Button
        onPress={() => console.log('click')}
        title="Enviar"
        color={colors.orangeSenac}
        accessibilityLabel="Enviar formulário"
      />
    </View>
  )
}
const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.blueSenac,
  },

  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.orangeSenac,
    paddingBottom: 10,
    paddingTop: 30,
  },

  description: {
    fontSize: 16,
    fontWeight: 'medium',
    color: colors.blueSenac,
  },

  formDescription: {
    fontSize: 16,
    fontWeight: 'medium',
    color: colors.blueSenac,
    textAlign: 'left',
    paddingBottom: 10,
  },

  input: {
    width: '100%',
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 4,
  },
})
