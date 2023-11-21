// import json server

const jsonserver=require('json-server')

// create server

const server=jsonserver.create()

// set the router--> set only after setting of db.json
const router=jsonserver.router("db.json")


// middle ware  --> act as a parser   between frontend and backend    (it passes the data from frontend and backend)

const middleware=jsonserver.defaults()



// create  port

const PORT=process.env.PORT || 4000

// middleware  use in server
server.use(middleware)

// use the router
server.use(router)



// run server

server.listen(PORT,()=>{
    console.log("media player server started at port:"+PORT);
})





