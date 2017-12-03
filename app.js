var app = require('express')();

app.set('view engine', 'ejs')

app.get('/', function(req, res){
	res.render("home")
})

app.get('/produtos', function(req, res){
	res.render("produtos/lista")
})

var porta = process.env.PORT || 3000;
app.listen(porta, function(){
	console.log("Servidor subindo na porta " + porta)
	console.log("Servidor rodando..")
})

