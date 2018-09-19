import { environment as defaultEnvironment } from './environment';

export const environmentLoader = new Promise<any>((resolve, reject) => {
  var xmlhttp = new XMLHttpRequest(),
    method = 'GET',
    url = './assets/environments/firebase.json';
    xmlhttp.open(method, url, true);
    xmlhttp.onload = function() {
      if (xmlhttp.status === 200) {
        resolve(JSON.parse(xmlhttp.responseText));
      } else {
        resolve(defaultEnvironment);
      }
    };
  xmlhttp.send();
});