
import { app } from './app';
import { AppDataSource } from './data-source';

const startServer = (port:number) =>{
    app.listen(port, ()=>console.log("server is running at http://localhost:3000"))
    try {
        AppDataSource.initialize()
        console.log("database initializated")
    } catch (error) {
        console.log(error)
    }
}

startServer(3000)