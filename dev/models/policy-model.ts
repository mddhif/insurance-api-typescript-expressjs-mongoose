import * as mongoose from 'mongoose';



export const PolicySchema = new mongoose.Schema ({
	
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

