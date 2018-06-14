import { Provider } from 'react-redux'
import Videos from './components/videos'
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
