# Medal
Code test for Medal

## Features
* Feed of videos from [YouTube Data API](https://developers.google.com/youtube/v3/)
* Swipe to view next/previous videos of the ones already loaded
* Indicate watched videos


## Packages/Libraries Used
* react
* react-native
* redux
* react-redux
* react-navigation
  - Handle app navigation
* redux-logger
  - Log actions, state, network requests, and console logs
* redux-thunk
  - Handle asynchronous actions
* [axios](https://github.com/axios/axios)
  - Make XMLHttpRequests
* [moment](https://github.com/moment/moment)
  - Format time
* [react-native-linear-gradient](https://github.com/react-native-community/react-native-linear-gradient)
  - Add custom linear gradient header
* [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)
  - Use for custom icons
* [haul](https://github.com/callstack/haul)
  - A command line tool for developing React Native apps
* [babel-auto-import](https://github.com/PavelDymkov/babel-plugin-auto-import)
  - Neat babel library that [converts global variables into import statements](https://github.com/PavelDymkov/babel-plugin-auto-import).
* [babel-plugin-extensible-destrucutring](https://github.com/vacuumlabs/babel-plugin-extensible-destructuring)
  - Enable extensible destructuring
* [babel-plugin-transform-decorators-legacy](https://github.com/loganfsmyth/babel-plugin-transform-decorators-legacy)
  - Allow decorators


## Trade-offs/Performance
1. **Http Requests**
    - Why I chose axios over other methods/libraries in order to *fetch* resources
        1. The response using *axios* is already in JSON format
        2. Error handling
2. **Rendering an infinite feed of videos**   
    - ScrollView vs FlatList
        1. When thinking of an infinite list of information, I think of a lot of data.
           The reason why I chose FlatList over ScrollView was simple and it's related
           to rendering of data. While, *ScrollView* renders all of it's children at once,
           *FlatList* utilizes lazy loading. Dealing with a potential infinite amount
           of information, a *ScrollView* would lead to slow rendering, potential waste
           of memory, and definte increased memory usage. When dealing with just a few data
           or a list of information, a *ScrollView* will be easier to implement.
3. **Haul**
    - Reason why I used haul, you can also read the reasons [here](https://github.com/callstack/haul).
        1. Replaces React Native packager to bundle your app
        2. Access to full webpack ecosystem, using additional loaders and plugins is simple
        3. Doesn't need watchman, symlinks work nicely
        4. Helpful and easy to understand error messages
        5. Hot Module Reloading
        6. ReactNative Packager vs Haul
            1. Initial load
                - About the same speed
            2. Second load
                - Haul is much faster because it uses the on-disk cache from the previous run,
                  while the ReactNative Packager loses its in-memory cachce.
        7. Handles symlinks
4. **Decorators**
    1. **Ex:** 
    ```
    export class App extends Component {...}
    function mapStateToProps (state) {
      return {
        videos: state.reducer.videos
      }
    }

    function mapDispatchToProps (dispatch) {
      return {
        loadVideos: () => dispatch(loadVideos())
      }
    }

    export default connect(
      mapStateToProps,
      mapDispatchToProps,
    )(App)
    
    **With decorators + destructuring**
    
    @connect(({reducer}) => ({...reducer}), {loadVideos})
    export class App extends Component {...}
    ```
    
    
## Memory Use
#### iOS using Leaks profiling template in xcode
  1. Initial videos Page (Feed of videos)
    - 27.42 MiB
  2. Video page (when a certain video is clicked)
    - 27.51 MiB
  3. Playing the video
    - 27.63 MiB
  ** No memory leaks
  
#### Android using the Android Profiler in Android Studio (Plays landscape)
  1. Initial videos page
    - 25.25 MB
  2. Video page
    - 34.6 MB
    - Reaches up to 40 MB when actions are clicked on page
  3. Playing the video
    - 50 MB
    - As more videos are watched it continues to increase
    

## Specific Requirements
```
iOS:
1. xcode

Android:
1. Android Studio
2. YouTube must be installed to emulator
```


## Preloading
  - I simply preload the videos before the app loads using an action called initApp and
    this function dispatches loadVideos action which initializes the videos in redux state.
    

## Getting Started
```
yarn
yarn haul
  select all - Serves both platforms
  
(Run on separate tabs)
react-native run-ios
react-native run-android

gg
```

           
