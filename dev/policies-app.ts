import  * as express from 'express';
import * as mongoose from "mongoose";
import * as bodyParser from "body-parser";
import {Routes} from "./routes/routes";


class App {

public app: express.Application;
public routes : Routes = new Routes();
public mongoUrl: string = 'mongodb://root:root@localhost/policies?authSource=admin&w=1';

constructor() {
this.app = express() ;

this.config();
this.routes.routes(this.app);

}


private config() : void{

this.app.use(bodyParser.json());
this.app.use(bodyParser.urlencoded({ extended: false}));
mongoose.Promise = global.Promise;
mongoose.connect(this.mongoUrl);


}


}

export default new App().app;
