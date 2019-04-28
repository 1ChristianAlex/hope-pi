import * as functions from 'firebase-functions';
import * as request from "request";
import * as express from "express";

const app = express()
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})
export const getSpotifyToken = () =>{
    return new Promise((res,rej)=>{
        const url = "https://accounts.spotify.com/api/token"
        request(url,{
            method:"POST",
            headers:{
                "Authorization": "Basic YjlkYThmOTc0MGJjNGNmNGFlNzU1ODJhYjM3N2NiN2Y6OGUxOWUyYTJiZDIyNDQ5YzhiYTNiNTBmZDJmMzU1ODE=",
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body:"grant_type=client_credentials"
        },(error, response)=>{
            if (response) {
                let body:string = response.body;
                console.log(body)
                 res(JSON.parse(body))
            }
            else{ 
                rej(error);
            }
        })
    }) 
}
app.get('/',(req,resF,next)=>{
    getSpotifyToken().then(res=>{
        resF.json(res);
        next()
    }).catch(err=>{
        resF.json(err);
    });

})

export const getSpotifyTokenF = functions.https.onRequest(app);

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });