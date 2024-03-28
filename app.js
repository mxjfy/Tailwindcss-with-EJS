import Express from 'express'
import path from 'path'



const app = Express();
const port = 8000;



// Static Files
app.use(Express.static(path.join(process.cwd(), 'public')));

// body-parser
app.use(Express.urlencoded({extended: true}));
app.use(Express.json());

// EJS - Engine
app.set('view engine', 'ejs')



// Routes
app.get('/', (req, res)=>{
    res.render('template');
})


// Server
const start = ()=> {
    try {
        app.listen(port, ()=>{
            console.log("Server is Running...", port)
        })
                
    } catch (error) {
        console.log(error)
    }
}

start();