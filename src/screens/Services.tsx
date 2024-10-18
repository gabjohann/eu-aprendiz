import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import { ServiceCard } from '../components/ServiceCard'

export function Services() {
  const navigation = useNavigation()

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingTop: 30,
        gap: 12,
      }}
    >
      <ServiceCard
        iconName="handshake"
        title="Normas de convivência"
        description="Aqui você vai saber sobre algumas normas e regras básicas do Senac-RS."
        handleCard={() => navigation.navigate('CodeOfConduct')}
      />
      <ServiceCard
        iconName="emoji-objects"
        title="Dicas"
        description="Aqui você vai aprender um pouco sobre as unidades curriculares."
        handleCard={() => navigation.navigate('Tips')}
      />
      <ServiceCard
        iconName="badge"
        title="Venha ser um aprendiz"
        description="Este espaço é destinado para quem está começando no mercado de trabalho. Você irá perceber que não é tão difícil como parece."
        handleCard={() => navigation.navigate('Invite')}
      />
      <ServiceCard
        iconName="paid"
        title="Meu primeiro salário"
        description="Aqui você vai aprender tudo sobre seu primeiro salário, como o que lhe é descontado e também a como calcular esses descontos."
        handleCard={() => navigation.navigate('Salary')}
      />
    </View>
  )
}
