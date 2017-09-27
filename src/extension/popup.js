var _gaq = _gaq || []
_gaq.push(['_setAccount', 'UA-107154579-1'])
_gaq.push(['_trackPageview'])
;(function() {
  var ga = document.createElement('script')
  ga.type = 'text/javascript'
  ga.async = true
  ga.src = 'https://ssl.google-analytics.com/ga.js'
  var s = document.getElementsByTagName('script')[0]
  s.parentNode.insertBefore(ga, s)
})()

function trackChirrAppClick(e) {
  _gaq.push(['_trackEvent', 'popup', 'Chirr App click'])
}

document.getElementById('chirr-app').addEventListener('click', trackChirrAppClick)
