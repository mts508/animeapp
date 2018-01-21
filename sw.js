self.addEventListener('install', function(event) {
	const options = {
    body: 'Yay it works.',
    icon: 'images/icon.png',
    badge: 'images/badge.png'
  };
	
});

self.addEventListener('activate', function(event) {
	console.log("activado");
});