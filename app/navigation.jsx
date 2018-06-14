import LinearGradient from 'react-native-linear-gradient'
import Icon from 'react-native-vector-icons/MaterialIcons'

export const navigationOptions = {
  header: ({navigation: {
    goBack, state: {index, routes}}
  }) => (
    <View>
      <LinearGradient
        start={{x: 1.5, y: 0.6}}
        style={header.header}
        colors={['#4c669f', '#3b5998', '#192f6a']}
      >
        <View style={header.flex}>
          {
            index !== 0 &&
            <Icon
              onPress={() => goBack(routes[index].key)}
              name={"keyboard-arrow-left"}
              size={40}
              style={header.back}
            />
          }
        </View>
        <View style={header.flex}>
          <Text style={header.text}>
            {routes[index].routeName}
          </Text>
        </View>
        <View style={header.flex}></View>
      </LinearGradient>
    </View>
  )
}

const header = StyleSheet.create({
  header: {
    height: 60,
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    marginTop: 25,
    flex: 1
  },
  back: {
    marginTop: 17,
    color: 'white'
  },
  flex: {
    flex: 1
  }
})
