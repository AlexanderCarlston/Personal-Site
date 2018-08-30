# personal-project

> I worked on this website a long time ago, so unfortunately this website isn't mobile friendly. However, this was my first time implementing a feature in to my code, so I am proud of that.

## Walk through
* [Animated text](https://github.com/AlexanderCarlston/Personal-Site/blob/master/src/components/AnimatedText.vue)

![textPicture](https://media.giphy.com/media/1ZnG301DuY9DSU1TKg/giphy.gif)

First off I use a function called splitHTMLAndAnimateChildNodes, which does what it says.
``` javascript
    mounted () {
    this.splitHTMLAndAnimateChildNodes(this.$refs.headline, '.anim .str__item')
  }
```
Since mounted is the only user interaction, this function is where most of the things happen.
``` javascript
    splitHTMLAndAnimateChildNodes (el, targets) {
      this.setLoadingText()
      .then(() => this.splitHTMLStringIntoNodes(el))
      .then(() => this.animateLetters(el, targets))
    }
```
Simple function that sets the loading text using a promise
``` javascript
    setLoadingText () {
      return new Promise ((resolve, reject) => {
        this.loadingText = this.getRandomText()
        resolve()
      })
    }
```
Then I use the function splitHTMLStringIntoNodes which is passed down the element and an object.
``` javascript
    splitHTMLStringIntoNodes (el, opt = { classPrefix: 'str__item inline-block ltr' }) {
      return new Promise ((resolve, reject) => {
        charming(el, opt)
        resolve()
      })
    }
```
This function is where the bulk of the animation happens, naming is extremely important so this function (to be simple) animates the letters.
``` javascript
```
``` javascript
```
``` javascript
```
``` javascript
```
``` javascript
```
``` javascript
```
``` javascript
```
``` javascript
```
``` javascript
```










* [Animated bubbles](https://github.com/AlexanderCarlston/Personal-Site/blob/master/src/App.vue)

![BubblePicture](https://media.giphy.com/media/2t9uOJyJQHxL6URamL/giphy.gif)




* [Animated bubbles burst](https://github.com/AlexanderCarlston/Personal-Site/blob/master/src/App.vue)

![BubbleBurst](https://media.giphy.com/media/dtiBVHJm5VxoL8R6Ir/giphy.gif)













## Built With:
* [Vue.js](https://vuejs.org/) - Front End Framework
* [Vuetify](https://vuetifyjs.com/en/) - Fast design prototyping (might change to vanilla)
* [Vue Router](https://router.vuejs.org/) - Navigation



















## Uses:
* [Server]() - PostgreSQL server













## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```
