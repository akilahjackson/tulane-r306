export function tu_experience (UIaction) {
	
		const butler = UIaction;
	
		switch (butler) {
				
			case "start" :	
				
				
							if ('serviceWorker' in navigator) {

						  navigator.serviceWorker.register('../tuexperience.js', {scope:'/'})
						  .then(function(registration) {
							console.log('[TU Experience] is installed for :', registration.scope);
						  })

						  .catch(function(error) {
							console.log('[TU Experience] is not working properly, error:', error);
						  });


						}
	
			break;
				
			
				
				
				
		};
					/*		if ('serviceWorker' in navigator) {

						  navigator.serviceWorker.register('../tuexperience.js', {scope:'/'})
						  .then(function(registration) {
							console.log('[TU Experience] is installed for :', registration.scope);
						  })

						  .catch(function(error) {
							console.log('[TU Experience] is not working properly, error:', error);
						  });


						} */
	
}