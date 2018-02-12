const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials')

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));
app.get('/', (req, resp)=>{

//  resp.send('Hello Express');
// resp.send({
//   name: 'Juan',
//   likes:[
//     'Soccer', 'traveling'
//   ]
// });
//
resp.render('home.hbs', {
  pageTitle: 'Home!!',
  welcomeMsg:'Welcome to this website',
  currentYear: new Date().getFullYear()

})
})

app.get('/about', (req, res) =>{
  res.render('about.hbs', {
    pageTitle:'About Page',
    currentYear: new Date().getFullYear()

  })
})

app.get('/bad', (req, res) =>{
  res.send({
    error: 'unable to handle request'
  });
})
app.listen(4000, ()=> {
  console.log('server is up on port 4000');
});
