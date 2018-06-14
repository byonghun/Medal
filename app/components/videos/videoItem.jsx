import moment from 'moment'
import { video as style } from './styles'
import { VideoView as WebView } from '../common'
import { watchedVideo } from '../../actions'

@connect(({reducer}) => ({...reducer}), {watchedVideo})
export class VideoItem extends Component {
  state = { clicked: false }

  render() {
    const { clicked } = this.state
    const {
      id,
      index,
      width,
      videos,
      snippet: {
        channelTitle,
        description,
        publishedAt,
        title
      }
    } = this.props

    return (
      <ScrollView style={[style.container, {width}]}>
        <View style={style.webViewContainer}>
          <TouchableOpacity
            activeOpacity={1}
            style={style.flex}
            onPress={this.onPress}
          >
            <WebView
              uri={`https://www.youtube.com/embed/${id}?playsinline=1`}
              id={id}
            />
          </TouchableOpacity>
        </View>
        <View style={style.textContainer}>
          <Text style={style.title}>{title}</Text>
          <Text style={style.publishedAtText}>
            {`Published on ${moment(publishedAt).format('MMMM Do, YYYY')}`}
          </Text>
          <Text
            onPress={this.toggleClick}
            style={style.clickText}
          >
            Click to expand
          </Text>
          <Text
            onPress={this.toggleClick}
            numberOfLines={clicked ? null : 5}
            style={style.description}
          >
            {description}
          </Text>
        </View>
      </ScrollView>
    )
  }

  onPress = () => {
    this.props.watchedVideo(this.props.id)
  }


  toggleClick = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }
}
