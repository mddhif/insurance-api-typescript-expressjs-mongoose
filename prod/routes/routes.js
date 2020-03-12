"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const policies_controller_1 = require("../controllers/policies-controller");
class Routes {
    constructor() {
        this.policyController = new policies_controller_1.PolicyController();
    }
    routes(app) {
        app.route('/')
            .get(this.policyController.welcomingMessage);
        app.route('/policy')
            .get(this.policyController.getPolicies)
            .post(this.policyController.createPolicy);
        app.route('/policy/:policyId')
            .get(this.policyController.getPolicyByID)
            .put(this.policyController.updatePolicy)
            .delete(this.policyController.deletePolicy);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=routes.js.map