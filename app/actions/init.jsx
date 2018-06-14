import { loadVideos } from '../actions'

export const initApp = () => {
  return (dispatch) => {
    dispatch(loadVideos())
  }
}
