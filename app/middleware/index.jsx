import axios from 'axios'

export default middleware = store => next => action => {
  if ('LOAD_VIDEOS' == action.type) {
    const {maxResults} = store.getState().reducer
    const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2C+contentDetails&chart=mostPopular&maxResults=${maxResults > 50 ? 50 : maxResults}&videoCategoryId=20&key=AIzaSyBoBiBsNWXjVYMZuYZvgzSv0wPjIqJ2XsU`

    axios.get(url)
         .then(resp =>
           next({
             type: 'VIDEOS_RECEIVED',
             payload: resp.data,
             loading: false
           }))
         .catch(err =>
           next({
             type: 'ERROR',
             error: error
           }))
  }

  next(action)
}
