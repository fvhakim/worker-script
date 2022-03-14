

addEventListener("fetch", event => {
  event.respondWith(doRedirects(event.request))
  })

  async function doRedirects(request) {
    
  let reqUA = request.headers.get('user-agent')
  let cookie = request.headers.get('Cookie');
 
  if (reqUA.includes('curl')) {
   
    console.log ( "--BE CAREFUL !!!! CURL REQUEST--");
    
    if(cookie !== null && cookie !== '')
      {

       if (cookie.includes('cf-noredir=yes')) {
           console.log ( "request's cookie has cf-noredir=yes, redirect will be bypassed ");
           return fetch(request);

        }
      }  
  let newLocation = "https://developers.cloudflare.com/";
  return Response.redirect(newLocation, 302)
  }

  console.log ( "--ALL GOOD. NO CURL REQUEST--");
  return fetch(request);
  }