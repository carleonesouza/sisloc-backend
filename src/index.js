const app= require( './app/app');
const { PORT } = require('./util/util');


app.listen(PORT, err => {
   if(err) {
       console.log('The connection cannot be established! ');
   }
   console.log('Connection was established!') 
});