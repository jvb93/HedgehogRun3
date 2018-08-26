import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//git
 export const hoglog = functions.https.onRequest((request, response) =>{
    if(request.method.toLowerCase() === "post")
    {
        const admin = require('firebase-admin');
        admin.initializeApp(functions.config().firebase);
        
        admin.firestore().collection('HogLogs').add({
            temperature_f: request.body.TemperatureF,
            ticks: request.body.Ticks,
            humidity: request.body.Humidity,
            timestamp: Date.now()
        }).then(writeResult => {
            response.status(200).send("Ok")
        });
    }
 })