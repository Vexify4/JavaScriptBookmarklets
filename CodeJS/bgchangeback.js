var newImage = prompt("URL Image", 
"https://i.ytimg.com/vi/Lr5E2KBfEGE/maxresdefault.jpg")
newImage = 'url('+newImage+') no-repeat'
$('body').css({'background':newImage})
