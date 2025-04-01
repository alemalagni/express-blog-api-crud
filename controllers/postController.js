const posts = require("../routers/posts");

function index(req, res){
    let strIndex = req;

    for ( let i = 0; i < posts.length; i++ ) {
        strIndex += `
                    <div>
                        <h2>${posts[i].title}</h2>
                        <p>${posts[i].slug}</p>
                        <div><span>${tag(i)}</span></div>
                        <div><img src="..${posts[i].image}"></div>
                        <p>${posts[i].content}</p>
                    </div>
                    `
    }

    res.type('html')
        .send(strIndex)
}

function tag(id){
    return posts[id].tags.join(", ");;
}

function show(req, res){
    const id = req.params.id;
    let strIndex = "";

    strIndex = `<h2>${posts[id].title}</h2>
    <p>${posts[id].slug}</p>
    <div><span>${tag(id)}</span></div>
    <div><img src="..${posts[id].image}"></div>
    <p>${posts[id].content}</p>`;

    res.type('html')
        .send(strIndex);
}

function store(req, res){
    const newID = posts.length;
    const newPost = {
        id: newID,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
        tag: req.body.tag,
    };

    posts.push(newPost);

    res.status(201);
    res.json(newPost);
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