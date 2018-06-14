import { navigationOptions } from '../../navigation'

class StackOne extends Component {
  render() {
    return (
      <Text>First text</Text>
    )
  }
}

export default createStackNavigator({
  StackOne
}, {
  navigationOptions
})
