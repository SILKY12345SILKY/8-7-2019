
const http=require('http');
const data={
    firstName:'Laurenec',
    lastName:'Svekis'
}
const site=http.createServer(function(req,res){
    console.log('hello world');
    console.log(req.headers);
    console.log(req.url);
    res.setHeader('Content-Type','application/json');
    res.write(JSON.stringify(data));
    res.end();
});
site.listen(3000);
