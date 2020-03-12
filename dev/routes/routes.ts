import {Request, Response} from "express";
import {PolicyController } from "../controllers/policies-controller";




export class Routes {

public policyController: PolicyController = new PolicyController();

public routes(app): void {



app.route('/')

.get(this.policyController.welcomingMessage)



app.route('/policy')


.get(this.policyController.getPolicies)

.post(this.policyController.createPolicy);




app.route('/policy/:policyId')

.get(this.policyController.getPolicyByID)

.put(this.policyController.updatePolicy)

.delete(this.policyController.deletePolicy);













}

}

