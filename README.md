# ticker v0.1
News ticker jQuery plugin with Css animation

To use this Plugin, use files in dist folder.

Compatible with jQuery 2.2.4 https://code.jquery.com/jquery-2.2.4.min.js
Haven't tested with earlier versions yet

Init the plugin on the element you whish with the following code :

$('#ticker').newsTicker({
  url: '',
  animation: 'bottom-up',
  itemSelector: '#ticker'
})

List of options :


url : the json file used to display the news content
animation : the animation style you want to use ( note : only one animation called 'bottom-up', for now)
intemSelector : the element you want to use with the plugin


Here are the default options:

url: '',
animation: 'bottom-up',
itemSelector: '#ticker'


HTML markup to add in your page to display the news ticker :
<div class="ticker" id="ticker"></div>
