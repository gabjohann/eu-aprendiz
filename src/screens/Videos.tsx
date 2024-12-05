import { Text, View, StyleSheet, TouchableOpacity, Linking } from 'react-native'
import { colors } from '../colors'

type VideosType = {
  id: number
  title: string
  url: string
}

const videos: VideosType[] = [
  {
    id: 1,
    title: 'como anexar meu atestado',
    url: 'https://www.youtube.com/watch?v=SlXYRp7tbKk',
  },
  {
    id: 2,
    title: 'moda',
    url: 'https://www.youtube.com/shorts/9m0zBYE69eo',
  },
  {
    id: 3,
    title: 'podcast',
    url: 'https://www.youtube.com/@FalaAprendiz',
  },
  {
    id: 4,
    title: 'conheça o senac',
    url: 'https://www.youtube.com/watch?v=s1ljxraSywc',
  },
]

export function Videos() {
  function handlePlayVideo(url: string) {
    Linking.openURL(url).catch(err => console.log('Failed to open URL', err))
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        paddingVertical: 40,
        paddingHorizontal: 30,
      }}
    >
      <Text style={styles.title}>Vídeos</Text>
      {videos.map(({ id, title, url }) => (
        <TouchableOpacity
          key={id}
          style={styles.card}
          onPress={() => handlePlayVideo(url)}
        >
          <Text style={styles.cardTitle}>{title}</Text>
        </TouchableOpacity>
      ))}
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

  cardTitle: {
    fontSize: 24,
    fontWeight: 'semibold',
    color: colors.orangeSenac,
    textAlign: 'center',
    textTransform: 'uppercase',
    maxWidth: 200,
  },

  text: {
    fontSize: 16,
    lineHeight: 22,
    color: 'black',
  },

  card: {
    backgroundColor: colors.blueSenac,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    paddingVertical: 40,
    marginBottom: 20,
  },
})
