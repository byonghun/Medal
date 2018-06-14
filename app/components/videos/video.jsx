import { VideoItem } from './videoItem'
const { width } = Dimensions.get('window')

export class Video extends Component {
  render() {
    const {
      id,
      videos,
      snippet: {
        channelTitle,
        description,
        publishedAt,
        title
      }
    } = this.props.navigation.state.params.props

    return (
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        data={videos}
        initialScrollIndex={findIndex(videos, ['id', id])}
        getItemLayout={this.getItemLayout}
        keyExtractor={item => item.id}
        getItemLayout={this.getItemLayout}
        renderItem={this.renderItem}
      />
    )
  }

  getItemLayout = (data, index) => (
    {length: width, offset: width*index, index}
  )

  renderItem = ({item, index}) => (
    <VideoItem
      key={item.id}
      index={index + 1}
      width={width}
      {...item}
    />
  )
}
