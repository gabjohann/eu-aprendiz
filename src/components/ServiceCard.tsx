import { View, TouchableOpacity, Text, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../colors'

type IconName = 'handshake' | 'emoji-objects' | 'badge' | 'paid'

type ServiceCardProps = {
  iconName: IconName
  title: string
  description: string
  handleCard: () => void
}

export function ServiceCard({
  iconName,
  title,
  description,
  handleCard,
}: ServiceCardProps) {
  return (
    <TouchableOpacity style={styles.card} onPress={handleCard}>
      <View style={styles.content}>
        <MaterialIcons name={iconName} size={40} color={colors.blueSenac} />
        <Text style={styles.title}>{title}</Text>
      </View>
      <Text style={styles.description}>{description}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.orangeSenac,
    alignItems: 'center',

    borderRadius: 8,
    paddingVertical: 22,
    paddingHorizontal: 10,
    marginHorizontal: 18,
  },

  content: {
    alignItems: 'center',
    flexDirection: 'row',
    gap: 12,
    paddingBottom: 16,
  },

  title: {
    fontSize: 20,
    color: colors.blueSenac,
    fontWeight: '600',
  },

  description: {
    textAlign: 'center',
    fontSize: 16,
    color: colors.blueSenac,
    fontWeight: '500',
  },
})
