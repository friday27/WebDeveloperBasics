var express = require("express");
var app = express();

app.get("/", function(req, res) {
    res.render("home.ejs");
});

app.get("/fallinlivewith/:thing", function(req, res) {
    var thing = req.params.thing;
    res.render("love.ejs", {thingVar: thing});
});

app.get("/posts", function(req, res) {
    var posts = [
        {title: "You are my queen. I don't know what to say.", author: "Jon"},
        {title: "Winter in coming~", author: "Arya"},
        {title: "Dracrays!", author: "Dany"}
    ];

    res.render("posts.ejs", {posts: posts});
});

app.listen(3000, function() {
    console.log("Server is started");
});