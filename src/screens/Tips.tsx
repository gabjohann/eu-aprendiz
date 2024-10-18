import { Text, View, StyleSheet } from 'react-native'
import { colors } from '../colors'

export function Tips() {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 30,
      }}
    >
      <Text style={styles.title}>Dicas</Text>

      <Text style={styles.text}>
        Senac antes de ser um ambiente profissional ele é também um ambiente
        social, nele teremos que socializar com nossos colegas e professores,
        nos abrir para novas atividades e experiências, claro que existem
        pessoas com mais dificuldade e timidez para se relacionar e conversar
        com outros mas esse será o lugar perfeito para você treinar sua
        comunicação e melhorar sua timidez.
      </Text>
      <Text style={styles.secondP}>
        Seja curioso e proativo, não tenha medo de fazer perguntas e buscar
        novas experiências. A curiosidade é a chave para o crescimento. Mostre
        iniciativa e esteja sempre disposto a aprender algo novo. Valorize os
        desafios, pois eles são oportunidades disfarçadas que nos ajudam a
        crescer e a nos tornar mais fortes. Encare cada obstáculo como uma
        chance de se superar.
      </Text>
      <Text style={styles.secondP}>
        Trabalhe em equipe, pois o sucesso muitas vezes é alcançado através da
        colaboração. Aprenda com seus colegas, compartilhe suas ideias e esteja
        aberto a diferentes perspectivas. Juntos, vocês podem ir mais longe.
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
