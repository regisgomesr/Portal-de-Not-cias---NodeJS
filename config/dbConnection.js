var mysql = require('mysql');

var connMySQL = function() {

    console.log('Conexao com bd estabelecida');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : '1234',
        database : 'portal_noticias' 
    });
}  



module.exports = function() {
    console.log('O autoload carregou o módulo de conexão com o BD ');
    return connMySQL;
}