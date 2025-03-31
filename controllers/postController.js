const postController = require("../data/menu");

function index(req, res){

}

function show(req, res){}

function store(req, res){
    res.send('Creazione del post');
}

function modify(req, res){
    res.send('Modifica integrale del post ' + req.params.id);
}

function update(req, res){
    res.send('Modifica parziale del post ' + req.params.id);
}

function destroy(req, res){
    res.send('Eliminazione del post ' + req.params.id);
}

module.exports = { index, show, store, modify, update, destroy }