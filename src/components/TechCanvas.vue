<template>
  <div>
    <v-btn @click="animate" block color="primary" dark>Animate</v-btn>
    <canvas @click="updateCoords" class="fireworks" width="1100" height="320"></canvas>
    <!-- <Buttons/> -->
  </div>
</template>

<script>
import anime from 'animejs'
const jscomp = require('jscomp')
import Buttons from '@/components/Buttons.vue'

export default {
  name: "TechCanvas",
  components: {
    Buttons
  },
  data: () => ({
    pointerX: 0,
    pointerY: 0,
    numberOfParticules: 30,
    colors: ['#4A148C', '#9C27B0', '#EC407A', '#1A237E']
  }),
  methods: {
    animate() {
      //Setting Variables
      var canvasEl = document.querySelector('.fireworks')
      var ctx = canvasEl.getContext('2d')
      canvasEl.className += ' bg-black'
      anime({
      duration: Infinity,
      update: function() {
        //Sets all pixels in the rectangle defined by starting point (x, y) and size (width, height) to transparent black, erasing any previously drawn content.
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height)
      }
    })
    },
    updateCoords(event) {
      this.pointerX = event.clientX - 50
      this.pointerY = event.clientY
      // console.log(this.pointerX, this.pointerY)
      this.animateParticules(this.pointerX , this.pointerY)
},
    setParticuleDirection(particle) {
      var angle = anime.random(0, 360) * Math.PI / 180
      var value = anime.random(50, 180)
      var radius = [-1, 1][anime.random(0, 1)] * value
      return {
        x: particle.x + radius * Math.cos(angle),
        y: particle.y + radius * Math.sin(angle)
      }
    },
    createParticule(x,y) {
      var particle = {}
      particle.x = x
      particle.y = y - 420
      particle.color = this.colors[anime.random(0, this.colors.length - 1)]
      particle.radius = anime.random(16, 32)
      particle.endPos = this.setParticuleDirection(particle)
      var canvasEl = document.querySelector('.fireworks')
      var ctx = canvasEl.getContext('2d')
      particle.draw = function() {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true)
        ctx.fillStyle = particle.color
        ctx.fill()
  }
  return particle
},
createCircle(x,y) {
  var particle = {}
  particle.x = x
  particle.y = y
  particle.color = '#FFF'
  particle.radius = 0.1
  particle.alpha = .5
  particle.lineWidth = 6
  particle.draw = function() {
    var canvasEl = document.querySelector('.fireworks')
    var ctx = canvasEl.getContext('2d')
    ctx.globalAlpha = particle.alpha
    ctx.beginPath()
    ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true)
    ctx.lineWidth = particle.lineWidth
    ctx.strokeStyle = particle.color
    ctx.stroke()
    ctx.globalAlpha = 1
}
return particle
},
renderParticule(anim) {
  for (var i = 0; i < anim.animatables.length; i++) {
    anim.animatables[i].target.draw()
  }
},
animateParticules(x, y) {
  var circle = this.createCircle(x , y )
  var particules = []
  for (var i = 0; i < this.numberOfParticules; i++) {
    particules.push(this.createParticule(x, y))
  }
  anime.timeline().add({
    targets: particules,
    x: function(particle) { return particle.endPos.x },
    y: function(particle) { return particle.endPos.y },
    radius: 0.1,
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: this.renderParticule
  })
    .add({
    targets: circle,
    radius: anime.random(80, 160),
    lineWidth: 0,
    alpha: {
      value: 0,
      easing: 'linear',
      duration: anime.random(600, 800),
    },
    duration: anime.random(1200, 1800),
    easing: 'easeOutExpo',
    update: this.renderParticule,
    offset: 0
})
}
}
}

</script>

<style scoped>
canvas {
  background-color: white;
}
.bg-black { background-color: #1b1b1b; }
.color-01 { color: #FF1461; } /* Red */
.color-02 { color: #FF7C72; } /* Orange */
.color-03 { color: #FBF38C; } /* Yellow */
.color-04 { color: #A6FF8F; } /* Citrus */
.color-05 { color: #18FF92; } /* Green */
.color-06 { color: #1CE2B2; } /* Darkgreen */
.color-07 { color: #5EF3FB; } /* Turquoise */
.color-08 { color: #61C3FF; } /* Lightblue */
.color-09 { color: #5A87FF; } /* Blue */
.color-10 { color: #8453E3; } /* Purple */
.color-11 { color: #C26EFF; } /* Lavender */
.color-12 { color: #FB89FB; } /* Pink */
</style>
