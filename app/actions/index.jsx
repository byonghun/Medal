export const loadVideos = () => ({
  type: 'LOAD_VIDEOS'
})

export const incMaxResults = () => ({
  type: 'INCREASE_MAX_RESULTS'
})

export const watchedVideo = id => ({
  type: 'WATCHED_VIDEO',
  id
})
