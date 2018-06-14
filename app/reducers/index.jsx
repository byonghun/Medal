const initialState = {
  maxResults: 5,
  videos: [],
  loading: true
}

export default function(state = initialState, action) {
  switch(action.type) {
    case 'VIDEOS_RECEIVED': {
      const items = action.payload.items

      if (items.length === 5) {
        return Object.assign({}, state, {
          videos: items,
          loading: action.loading
        })
      } else {
        const videos = slice(items, state.videos.length, items.length)
        return Object.assign({}, state, {
          videos: [...state.videos, ...videos]
        })
      }
    }
    case 'INCREASE_MAX_RESULTS': {
      return Object.assign({}, state, {
        maxResults: state.maxResults + 5
      })
    }
    case 'WATCHED_VIDEO': {
      const videos = map(state.videos, (video) => {
        if (video.id == action.id) {
          return merge(video, {watched: true})
        }
        return video
      })
      return Object.assign({}, state, {videos})
    }
  }

  return state
}
