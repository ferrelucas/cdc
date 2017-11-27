var app = require('express')();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.send("<html><body><h1>Home</h1></body></html>")
})

app.get('/produtos', function(req, res){
	res.render("produtos/lista")
})

app.listen(3000, function(){
	console.log("Servidor rodando..")
})

