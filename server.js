const express = require('express');
const app = express();

app.set('view engine', "ejs");

app.get('/', function(req, res){
    const items = [
        {
            title: "D",
            message: "esenvolvar aplicações e serviços de forma facil",
        },   
        
        {
            title: "E",
            message: "JS usa Javascript para renderizar HTML",
        },
        
        {
            title: "M",
            message: "uito facil de usar",
        },
        
        {
            title: "A",
            message: "morzinho",
        },
            
        {
            title: "I",
            message: "nstall ejs",
        },
        
        {
            title: "S",
            message: "intaxe simples"
        }
    ];

    const subtitle = "Uma linguagem de modelagem para criação de páginas HTML usando Javascript"
    res.render('pages/index', {
        qualidades: items,
        subtitle: subtitle,
    })
})

app.get('/sobre', function(req, res){
    res.render('pages/about')
})

app.listen(8080);
console.log('Rodando')
