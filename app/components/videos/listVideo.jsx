import { WebView, ImageView, VideoHeader } from '../common'
import { listVideo as style } from './styles'
import moment from 'moment'

export class ListVideo extends Component {
  render() {
    const {
      index,
      snippet: {
        publishedAt,
        channelTitle,
        title,
        thumbnails: {
          high: {
            url
          }
        }
      },
      watched
    } = this.props

    return (
      <View style={style.container}>
        <VideoHeader
          style={style.videoHeader}
          title={title}
          watched={watched && watched}
          index={index}
          onPress={this.navigate}
        />
        <View style={{flex: 7}}>
          <ImageView
            onPress={this.navigate}
            uri={url}
          />
          <TouchableOpacity onPress={this.navigate}>
            <View>
              <Text style={style.publisher}>
                {channelTitle}
              </Text>
              <Text style={style.publishedAtText}>
                {`Published on ${moment(publishedAt).format('MMMM Do, YYYY')}`}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  navigate = () => {
    this.props.navigation.navigate('Video', {props: this.props})
  }
}
