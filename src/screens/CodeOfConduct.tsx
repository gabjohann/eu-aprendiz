import { Text, View, StyleSheet, FlatList } from 'react-native'
import { colors } from '../colors'

export function CodeOfConduct() {
  const rules = [
    {
      rule: 'Vestimenta - não é permitido o uso de regatas, shorts ou saias acima do joelho, blusas com muito decotes ou cropped, essa regra vale para todos os gêneros.',
    },
    {
      rule: 'Relacionamento - evite qualquer relacionamento afetivo-pessoal entre gestor direto e colaborador',
    },
    {
      rule: 'Crachá - o uso do crachá de identificação é indispensável dentro do Senac.',
    },
    {
      rule: 'Horários - é de responsabilidade do aluno se atentar aos horários, temos tolerância de 10 minutos de atraso e 30 minutos de intervalo.',
    },
  ]

  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 30,
      }}
    >
      <Text style={styles.title}>Normas de Convivência</Text>
      <Text style={styles.subtitle}>O que são?</Text>
      <Text style={styles.text}>
        As normas de convivência são um conjunto de regras e princípios que
        orientam o comportamento e a interação entre indivíduos em um
        determinado ambiente, seja ele social, profissional ou virtual.
      </Text>
      <Text style={styles.secondP}>
        Essas normas são essenciais para garantir uma convivência harmoniosa e
        respeitosa, estabelecendo limites e direcionando as ações de cada pessoa
      </Text>
      <Text style={styles.secondP}>
        Aqui no intitulo Senac temos algumas normas de convivência que devem ser
        seguidas por todos, aqui estão elas:
      </Text>

      <FlatList
        data={rules}
        renderItem={({ item }) => {
          return (
            <View style={{ marginVertical: 10 }}>
              <Text style={styles.text}>{`\u2043 ${item.rule}`}</Text>
            </View>
          )
        }}
      />
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

  subtitle: {
    fontSize: 18,
    fontWeight: 'semibold',
    paddingBottom: 18,
    textDecorationLine: 'underline',
  },

  text: {
    fontSize: 16,
    lineHeight: 22,
    color: 'black',
  },

  secondP: {
    paddingTop: 10,
    fontSize: 16,
    lineHeight: 22,
    color: 'black',
  },
})
