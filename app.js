const express = require('express');
const app = express();
const port = 3000;
const posts = require("./posts");
const src = require('debug');

app.use( express.static('public') );

// Index
app.get( '/posts', (req, res) => {
    res.type('html')
        .send(index(req));
});

function index(req){
    let strIndex = req
    for ( let i = 0; i < posts.length; i++ ) {
        strIndex += `
                    <div>
                        <h2>${posts[i].title}</h2>
                        <p>${posts[i].slug}</p>
                        <div><span>${tag(i)}</span></div>
                        <div><img src="imgs/posts/${posts[i].image}"></div>
                        <p>${posts[i].content}</p>
                    </div>
                    `
    }

    return strIndex
}

function tag(id){
    let strTags = "";
    for ( let i = 0; i < posts.length; i++ ) {
        strTags += ` ${posts[id].tags[i]}`
    }

    return strTags;
}

// Show
app.get( '/posts/:id', (req, res) => {
    const id = req.params.id;

    res.type('html')
        .send(show(id));
});

function show(id) {
    `<h2>${posts[id].title}</h2>
    <p>${posts[id].slug}</p>
    <div><span>${tag(id)}</span></div>
    <div><img src="imgs/posts/${posts[id].image}"></div>
    <p>${posts[id].content}</p>`
}

// Store
app.post( '/posts', (req, res) => {
    res.send('Creazione del post');
});

// Update
app.put( '/posts/:id', (req, res) => {
    res.send('Modifica integrale del post ' + req.params.id);
});

// Modify
app.patch( '/posts/:id', (req, res) => {
    res.send('Modifica parziale del post ' + req.params.id);
});

// Destroy
app.delete( '/posts/:id', (req, res) => {
    res.send('Eliminazione del post ' + req.params.id);
});

app.listen( port, () => {
    console.log( `App in ascolto sulla porta ${port}` );
})