self.addEventListener('fetch', function(event) {
  // Respond with the resource from the network
  event.respondWith(fetch(event.request));
});
