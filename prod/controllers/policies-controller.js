"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const policy_model_1 = require("../models/policy-model");
const Policy = mongoose.model('Policy', policy_model_1.PolicySchema);
class PolicyController {
    welcomingMessage(req, res) {
        res.status(200).send('Insurance Policies:<br/><br/>List Policies : GET /policy <br/> Retrieve a Policy : GET /policy/{policyID} <br/> Create Policy : POST /policy <br/>  Modify a Policy : PUT /policy/{policyID} <br/> Delete a policy : DELETE /policy/{policyID}');
    }
    getPolicies(req, res) {
        Policy.find({}, (err, policy) => {
            if (err) {
                res.send(err);
            }
            res.json(policy);
        });
    }
    getPolicyByID(req, res) {
        Policy.findById(req.params.policyId, (err, Policy) => {
            if (err) {
                res.send(err);
            }
            res.json(Policy);
        });
    }
    createPolicy(req, res) {
        let newPolicy = new Policy(req.body);
        newPolicy.save((err, Policy) => {
            if (err) {
                res.send(err);
            }
            res.json(Policy);
        });
    }
    updatePolicy(req, res) {
        Policy.findOneAndUpdate({ _id: req.params.policyId }, req.body, { new: true }, (err, Policy) => {
            if (err) {
                res.send(err);
            }
            res.json(Policy);
        });
    }
    deletePolicy(req, res) {
        Policy.deleteOne({ _id: req.params.policyId }, (err, Policy) => {
            if (err) {
                res.send(err);
            }
            res.json({ message: 'Policy deleted' });
        });
    }
}
exports.PolicyController = PolicyController;
//# sourceMappingURL=policies-controller.js.map