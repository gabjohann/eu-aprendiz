import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../colors'

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eu aprendiz</Text>
      <Text style={styles.subTitle}>Venha ser um jovem aprendiz</Text>

      <Text style={styles.text}>
        Aqui você vai aprender todos os truques sobre um jovem aprendiz.
      </Text>

      <Text style={styles.description}>
        Nosso propósito é lhe oferecer uma visão abrangente sobre o programa
        jovem aprendiz e te ajudar a se preparar para ingressar no mercado de
        trabalho, trazendo as normas de convivência no ambiente profissional,
        dicas e tudo o que precisa saber para transformar essa transição do meio
        escolar para o ambiente profissional um pouco mais fácil e menos
        confuso.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },

  title: {
    textTransform: 'uppercase',
    fontSize: 32,
    fontWeight: '700',
    color: colors.orangeSenac,
  },

  subTitle: {
    fontSize: 22,
    paddingBottom: 50,
    color: colors.blueSenac,
  },

  text: {
    fontSize: 18,
    lineHeight: 28,
    paddingBottom: 24,
    fontWeight: '700',
    color: colors.blueSenac,
  },

  description: {
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '700',
    color: colors.blueSenac,
  },
})
