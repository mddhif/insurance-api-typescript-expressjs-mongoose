import { Request, Response } from 'express';
import * as mongoose from 'mongoose';
import { PolicySchema } from '../models/policy-model';


const Policy = mongoose.model('Policy', PolicySchema);

export class PolicyController {


public welcomingMessage(req: Request, res: Response) {

  res.status(200).send('Insurance Policies:<br/><br/>List Policies : GET /policy <br/> Retrieve a Policy : GET /policy/{policyID} <br/> Create Policy : POST /policy <br/>  Modify a Policy : PUT /policy/{policyID} <br/> Delete a policy : DELETE /policy/{policyID}'

  	)


}


public getPolicies (req: Request, res: Response) {
	
Policy.find({}, (err, policy) => {

if(err){
res.send(err);
}

res.json(policy);

});

}



public getPolicyByID (req: Request, res: Response) {
Policy.findById(req.params.policyId, (err, Policy) => {
if(err){
res.send(err);
}
res.json(Policy);
});
}


public createPolicy (req: Request, res: Response) {

let newPolicy = new Policy(req.body);

newPolicy.save((err, Policy) => {

if(err){
res.send(err);
}

res.json(Policy);

});

}

public updatePolicy (req: Request, res: Response) {
Policy.findOneAndUpdate({ _id: req.params.policyId }, req.body, { new: true }, (err, Policy) => {
if(err){
res.send(err);

}
res.json(Policy);
});
}



public deletePolicy (req: Request, res: Response) {
Policy.deleteOne({ _id: req.params.policyId }, (err, Policy) => {
if(err){
res.send(err);
}
res.json({ message: 'Policy deleted'});
});
}




}
