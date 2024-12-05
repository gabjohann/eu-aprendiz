import React from 'react'
import { View, Image, StyleSheet, Dimensions } from 'react-native'
import imageToDisplay from '../assets/calendar.png' // Substitua com o caminho da sua imagem

export function Calendar() {
  return (
    <View style={styles.container}>
      <Image source={imageToDisplay} style={styles.image} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    transform: [{ rotate: '90deg' }], // Rotaciona a imagem 90 graus
    resizeMode: 'cover', // Garante que a imagem mantenha suas proporções
  },
})
