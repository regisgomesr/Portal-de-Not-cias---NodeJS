var app = require('./config/server');


//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);
//var rotaHome = require('./app/routes/home')(app);
//var rotaForm = require('./app/routes/formulario_inclusao_noticia');
//rotaForm(app);



app.listen(3000, function() {
    console.log('Servidor ON');
});

