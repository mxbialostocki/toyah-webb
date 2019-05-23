$(window).on('load', function () {
  $('span.kreydyhov').hover(function () {
    kinstance.play()
  },
  function () {
    kinstance.load()
  })
})

var source = '././assets/killkist_kreydy_kreyyd.mp3'
var audio = document.createElement('audio')
//
audio.autoplay = true
//
audio.load()
audio.addEventListener('load', function () {
  audio.play()
}, true)
audio.src = source
