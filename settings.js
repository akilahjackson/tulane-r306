if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('tuexperience.js', {scope:'/'})
  .then(function(registration) {
    console.log('[TU Experience] is installed for :', registration.scope);
  })
	
  .catch(function(error) {
    console.log('[TU Experience] is not working properly, error:', error);
  });

}


function validateResponse(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function readResponseAsJSON(response) {
  return response.json();
}

function readResponseAsBlob(response) {
  return response.blob();
}