import { Text, View, StyleSheet, FlatList } from 'react-native'
import { colors } from '../colors'

export function Salary() {
  return (
    <View
      style={{
        flex: 1,
        paddingVertical: 40,
        paddingHorizontal: 20,
      }}
    >
      <Text style={styles.title}>Meu Primeiro Salário</Text>

      <Text style={styles.subtitle}>
        Para calcular o seu salario liquido você precisa saber dos principais
        descontos que são aplicados:
      </Text>

      <Text style={styles.items}>
        <Text style={styles.label}>INSS</Text> - é descontado{' '}
        <Text style={styles.discount}>8%</Text> do salário bruto.
      </Text>
      <Text style={styles.items}>
        <Text style={styles.label}>FGTS</Text> - desconto de{' '}
        <Text style={styles.discount}>2%</Text> do salário bruto.
      </Text>
      <Text style={styles.items}>
        <Text style={styles.label}>Vale Transporte</Text> - desconto de{' '}
        <Text style={styles.discount}>6%</Text> do salário bruto.
      </Text>
      <Text style={styles.items}>
        <Text style={styles.label}>
          IRRF (Imposto de Renda Retido na Fonte) {''}
        </Text>
        - desconto de <Text style={styles.discount}>8%</Text> do salário bruto.
        {'\n'}*Esse depende do salário do JovemAprendiz.
      </Text>

      <Text style={styles.text}>
        Você tem que saber o seu salário bruto, que é o valor total, para poder
        saber qual será seu salário líquido, que é o valor com descontos. Em
        seguida some os valores dos descontos obrigatórios{' '}
        <Text style={styles.label}>(INSS, FGTS, vale transporte, etc)</Text>.
        {'\n'}Depois{' '}
        <Text style={{ textDecorationLine: 'underline' }}>subtraia</Text> os
        descontos do salário bruto.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.blueSenac,
    paddingBottom: 30,
    textAlign: 'center',
  },

  subtitle: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: 'bold',
    paddingBottom: 20,
  },

  items: {
    fontSize: 16,
    paddingBottom: 10,
  },

  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.blueSenac,
  },

  discount: {
    color: 'red',
    fontWeight: 'bold',
  },

  text: {
    fontSize: 16,
    lineHeight: 24,
  },
})
