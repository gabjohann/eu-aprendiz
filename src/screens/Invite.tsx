import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../colors'

export function Invite() {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 30,
      }}
    >
      <Text style={styles.title}>Venha ser um aprendiz</Text>

      <Text style={styles.text}>
        No programa Jovem Aprendiz você irá viver muitas experiências novas e
        irá aprender muito, o jovem aprendiz é a porta de entrada para o mercado
        de trabalho, você terá a chance de adquirir conhecimentos valiosos e
        desenvolver habilidades que serão essenciais para o seu futuro
        profissional.
      </Text>
      <Text style={styles.secondP}>
        Você vai ter também a possibilidade de ganhar experiência enquanto ainda
        está estudando, logo, quando você terminar a escola, já terá um
        currículo recheado de experiências e competências que farão toda a
        diferença na hora de buscar novas oportunidades. mas não se preocupe o
        programa é pensado para que você consiga conciliar os estudos com o
        trabalho, sem prejudicar seu desempenho escolar.
      </Text>
      <Text style={styles.secondP}>
        Além disso, participar do programa Jovem Aprendiz é uma excelente
        maneira de começar a construir sua independência financeira. Com o seu
        próprio salário, você poderá ajudar em casa, comprar suas coisas e até
        mesmo economizar para o futuro. É uma sensação incrível poder conquistar
        suas próprias coisas com o fruto do seu trabalho.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blueSenac,
    textAlign: 'center',
    paddingBottom: 30,
  },

  text: {
    fontSize: 16,
    lineHeight: 22,
    color: 'black',
  },

  secondP: {
    paddingTop: 14,
    fontSize: 16,
    lineHeight: 22,
    color: 'black',
  },
})
