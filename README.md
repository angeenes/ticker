# ticker v0.1
News ticker jQuery plugin with Css animation<br/>

To use this Plugin, use files in dist folder.<br/>

Compatible with jQuery 2.2.4 https://code.jquery.com/jquery-2.2.4.min.js<br/>
Haven't tested with earlier versions yet<br/>

Init the plugin on the element you whish with the following code :

$('#ticker').newsTicker({
  url: '',
  animation: 'bottom-up',
  itemSelector: '#ticker'
})

List of options :
<br/><br/>

url : the json file used to display the news content<br/>
animation : the animation style you want to use ( note : only one animation called 'bottom-up', for now)<br/>
intemSelector : the element you want to use with the plugin

<br/><br/>
Here are the default options:

url: '',<br/>
animation: 'bottom-up',<br/>
itemSelector: '#ticker'<br/>

<br/><br/>
HTML markup to add in your page to display the news ticker :<br/>
'<div class="ticker" id="ticker"></div>'
