import { WebView } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import YouTube from 'react-native-youtube'

export const VideoView = ({uri, id, watched}) => {
  const RenderWebView = Platform.OS == 'android' ? YouTube : WebView
  return (
    <RenderWebView
      style={styles.webView}
      videoId={id}
      play={watched ? true : false}
      fullscreen={watched ? true : false}
      apiKey={"AIzaSyBoBiBsNWXjVYMZuYZvgzSv0wPjIqJ2XsU"}
      source={{uri}}
    />
  )
}

export const ImageView = ({uri, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Image
      style={styles.webView}
      source={{uri}}
    />
  </TouchableOpacity>
)

export const VideoHeader = ({title, index, watched, style={}, onPress}) => (
  <View style={style}>
    <Text
      numberOfLines={1}
      onPress={onPress}
      style={styles.videoHeaderText}>
      {title}
    </Text>
    <View style={watched
               ? [styles.checkContainer,
                  styles.checked]
               : styles.checkContainer}>
      {watched
       ? <Icon name={"done"} color='white' size={20} />
       : <Text style={styles.index}>{index}</Text>}
    </View>
  </View>
)

var styles = StyleSheet.create({
  videoHeaderText: {
    fontSize: 25,
    fontWeight: 'bold',
    flex: 1,
    color: 'black'
  },
  webView: {
    width: '95%',
    marginTop: 15,
    height: 250,
    alignSelf: 'center'
  },
  checked: {
    borderColor: 'green',
    backgroundColor: 'green'
  },
  checkContainer: {
    borderWidth: 2,
    borderColor: '#4c669f',
    borderRadius: 12.5,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '3%',
    marginTop: 2.5
  },
  index: {
    color: 'rgba(0,0,0,0.7)',
    fontSize: 14,
    fontWeight: '600'
  }
})
