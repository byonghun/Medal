import { navigationOptions } from '../../navigation'
import { loadVideos, incMaxResults } from '../../actions'
import { ListVideo } from './listVideo'
import { Video } from './video'
import { style } from './styles'

@connect(({reducer}) => ({...reducer}), { loadVideos, incMaxResults })
class Videos extends Component {
  render() {
    if (this.props.loading) {
      return (
        <Text style={style.loadingText}>
          Loading...
        </Text>
      )
    }
    return (
      <FlatList
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id}
        onEndReached={this.handleLoadMore}
        renderItem={this.renderItem}
        data={this.props.videos}
        ListEmptyComponent={this.emptyComponent}
        ListFooterComponent={this.footerComponent}
      />
    )
  }

  footerComponent = () => (
    <Text style={style.footerText}>
      {this.props.videos.length === 50
       ? "No more videos"
       : ""}
    </Text>
  )

  emptyComponent = () => (
    <Text style={style.emptyText}>
      No data available...
    </Text>
  )

  renderItem = ({item, index}) => (
    <ListVideo
      key={item.id}
      index={index + 1}
      {...this.props}
      {...item}
    />
  )

  handleLoadMore = () => {
    this.props.incMaxResults()
    this.props.loadVideos()
  }
}

export default createStackNavigator({
  Videos,
  Video
}, {
  navigationOptions
})
