import { Provider } from 'react-redux'
import Videos from './components/videos'
import Instructions from './components/instructions'
import { store as _store} from './config/store'
import { initApp } from './actions/init'

const store = _store()
store.dispatch(initApp())

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}

const Navigator = createBottomTabNavigator({
  Instructions,
  Videos
}, {
  initialRouteName: 'Videos',
  tabBarOptions: {
    style: {
      paddingBottom: 12
    },
    activeTintColor: '#4c669f',
    labelStyle: {
      fontSize: 16,
      fontWeight: 'bold'
    }
  }
})
