export const style = StyleSheet.create({
  emptyText: {
    alignSelf: 'center',
    marginTop: 25
  },
  loadingText: {
    alignSelf: 'center',
    marginTop: 25,
    fontSize: 20,
    fontWeight: 'bold'
  },
  footerText: {
    alignSelf: 'center',
    marginVertical: 25,
    fontWeight: 'bold',
    fontSize: 20
  }
})

export const listVideo = StyleSheet.create({
  container: {
    height: 360,
    marginTop: 15,
    marginBottom: 20
  },
  videoHeader: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: '2.5%',
    marginTop: 10
  },
  publisher: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: '2.5%',
    color: 'black'
  },
  publishedAtText: {
    fontSize: 15,
    marginTop: 5,
    marginLeft: '2.5%'
  }
})

export const video = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  },
  flex: {
    flex: 1
  },
  webViewContainer: {
    height: 320
  },
  textContainer: {
    marginTop: Platform.OS === "android" ? 0 : 20,
    width: '90%',
    alignSelf: 'center'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black'
  },
  publishedAtText: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 5,
    color: '#404040'
  },
  clickText: {
    marginTop: 20,
    color: 'black',
    fontWeight: 'bold'
  },
  description: {
    color: '#202020',
    marginTop: 10,
    paddingBottom: 30
  }
})
