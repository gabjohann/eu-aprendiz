import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native'
import { colors } from '../colors'
import logo from '../assets/logo.png'
import { useNavigation } from '@react-navigation/native'

export function Home() {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logoImage} />

        <View>
          <Text style={styles.title}>Eu aprendiz</Text>
          <Text style={styles.subTitle}>Venha ser um jovem aprendiz</Text>
        </View>
      </View>

      <View style={styles.content}>
        <Text style={styles.text}>
          Aqui você vai aprender todos os truques sobre um jovem aprendiz.
        </Text>

        <Text style={styles.description}>
          Nosso propósito é lhe oferecer uma visão abrangente sobre o programa
          jovem aprendiz e te ajudar a se preparar para ingressar no mercado de
          trabalho, trazendo as normas de convivência no ambiente profissional,
          dicas e tudo o que precisa saber para transformar essa transição do
          meio escolar para o ambiente profissional um pouco mais fácil e menos
          confuso.
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Calendar')}
        >
          <Text style={styles.buttonText}>Agenda</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-evenly',
    paddingHorizontal: 12,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  logoImage: {
    width: 60,
    height: 60,
    borderRadius: 4,
  },

  title: {
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: '700',
    color: colors.orangeSenac,
  },

  subTitle: {
    fontSize: 22,
    color: colors.blueSenac,
  },

  content: {
    paddingHorizontal: 10,
  },

  text: {
    fontSize: 22,
    lineHeight: 28,
    paddingBottom: 32,
    fontWeight: '700',
    color: colors.blueSenac,
  },

  description: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    paddingBottom: 20,
    color: colors.blueSenac,
  },

  button: {
    width: 180,
    alignItems: 'center',
    marginVertical: 0,
    marginHorizontal: 'auto',
    borderWidth: 2,
    borderColor: colors.orangeSenac,
    borderRadius: 6,
    padding: 10,
  },

  buttonText: {
    fontSize: 22,
    lineHeight: 28,
    fontWeight: '700',
    color: colors.blueSenac,
  },
})
