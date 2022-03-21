const express = require ('express');
const app = express();
const port = 3000;
app.get('/', (reg, res) => {
    res.send('Hello World')
});
app.get('/contact', (reg, res) => {
    res.send('Hello World - it my contact')
});
app.get('/home', (reg, res) => {
    res.send('Hello World it my world')
});
app.get('/my', (reg, res) => {
    res.send('Hello World my world')
});
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})
app.listen(port,() => {
    console.log(`Example app listening on port ${port}`)
})