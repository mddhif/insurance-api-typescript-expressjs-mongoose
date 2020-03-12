"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
exports.PolicySchema = new mongoose.Schema({
    created_date: {
        type: Date,
    },
    expire_date: {
        type: Date,
    },
    number: {
        type: String
    },
    status: {
        type: String
    }
});
//# sourceMappingURL=policy-model.js.map