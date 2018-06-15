// animateParticules(x, y) {
//   var circle = this.createStarCircle(x , y )
//   var particules = []
//   for (var i = 0; i < this.numberOfParticules; i++) {
//     particules.push(this.createStarParticule(x, y))
//   }
//   anime.timeline().add({
//     targets: particules,
//     x: function(particle) { return particle.endPos.x },
//     y: function(particle) { return particle.endPos.y },
//     radius: 0.1,
//     duration: anime.random(1200, 1800),
//     easing: 'easeOutExpo',
//     update: this.renderParticule
//   })
//     .add({
//     targets: circle,
//     radius: anime.random(80, 160),
//     lineWidth: 0,
//     alpha: {
//       value: 0,
//       easing: 'linear',
//       duration: anime.random(600, 800),
//     },
//     duration: anime.random(1200, 1800),
//     easing: 'easeOutExpo',
//     update: this.renderParticule,
//     offset: 0
// })
// }




//   updateStarCoords(event) {
//     var canvasHeight = document.querySelector('.stars').height
//     this.layerX = event.layerX 
//     this.layerY = event.layerY + ((event.layerY/canvasHeight) * (canvasHeight/13) ) 
//     //ClientY does the exact oppisite
//     this.animateParticules(this.layerX , this.layerY)
// },
//   createStarParticule(x,y) {
//     var particle = {}
//     particle.x = x
//     particle.y = y
//     particle.color = this.colors[anime.random(0, this.colors.length - 1)]
//     particle.radius = anime.random(16, 32)
//     particle.endPos = this.setParticuleDirection(particle)
//     var canvasEl = document.querySelector('.stars')
//     var ctx = canvasEl.getContext('2d')
//     particle.draw = function() {
//       ctx.beginPath()
//       ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true)
//       ctx.fillStyle = particle.color
//       ctx.fill()
// }
// return particle
// },
// createStarCircle(x,y) {
// var particle = {}
// particle.x = x
// particle.y = y
// particle.color = '#FFF'
// particle.radius = 0.1
// particle.alpha = .5
// particle.lineWidth = 6
// particle.draw = function() {
//   var canvasEl = document.querySelector('.stars')
//   var ctx = canvasEl.getContext('2d')
//   ctx.globalAlpha = particle.alpha
//   ctx.beginPath()
//   ctx.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI, true)
//   ctx.lineWidth = particle.lineWidth
//   ctx.strokeStyle = particle.color
//   ctx.stroke()
//   ctx.globalAlpha = 1
// }
// return particle
// },
