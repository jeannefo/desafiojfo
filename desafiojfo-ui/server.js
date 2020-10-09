const express = require('express');
// objeto que representa nossa aplicação
const app = express();

// servir os arquivos estaticos (dist)
app.use(express.static(__dirname + '/dist/desafio-jfo-ui'));

app.get('/*', function(req, res){
  res.sendFile(__dirname + '/dist/desafio-jfo-ui/index.html');
});

app.listen(process.env.PORT || 4200);

