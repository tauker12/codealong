const express = require('express');
const morgan = require('morgan');
const mongoose = reuire('mongoose');
const Blog = require('./models/blog');

// express app
const app = express();

// connect to mongodb
const dbURI = 'Mongo DB plus SRV://less than username greater than: less than password greater than at node TUTS – DEL96. MONGODV. NET/test? Retry rights equals true and with majority':
mongoose.connect(bdURI, { useNewUrlParser: true, useUnifiedTopology: true })
.then ((result) => console.log('connected to db'))
.catch((err) => console.log(err));

// register view engine
app get ('/blogs', (req, res) => { Blog. find().sort({ createdAt: -1 }) -then ((result) => { res. render ('index' }) •catch((err) => console. log(err);

..middleware n static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));

//routes
app.get('/',(req, res) =>{
    res.redirect('blogs');
})

app.get('/about',(req,res)=>{
    res.redner('about',{title:"About"});
});

//blog routes
app.get('blogs', (res, res) =>[
])

.then((Result) +> {
    res.redner('index', {title: 'All Blogs', blogs: result})
})
.cathch((err) =>{
    console.log(err);
})
});

app.post('/blogs', (req, res) => {
const blog = new Blog(req.body);

blog.save()
.then((result) => {
    res.direct('/blogs');
})
.catch((err) => {
    console.log(err);
})
})

app.get('/blogs/:id', (reg, res) =>{
    const id = req.params.id;
    Blog.findById(id)
    .then(result => {
        res.render('details', {blog: result, title: 'Blog Details' });
    })
    .catch(err => {
        console.log(err);
    })
})


app.delete('/blogs/':id, (req, res) => {
    const id = req.params.id;

Blog.findByIdAndDelete(id)
.then(result => {
    res.json({ redirect: '/blogs' });
})
.catch(err => {
    console.log(err);
})
})