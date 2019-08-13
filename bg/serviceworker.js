self.addEventListener('install', function(event) {
  console.log("Installing...")
  return self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  console.log("Activating...");
	return self.clients.claim();
});

self.addEventListener('message', function(event) {
  console.log("ServerWorker: Received message");
});
