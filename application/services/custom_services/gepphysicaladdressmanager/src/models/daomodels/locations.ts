
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const locationsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   name: String,
   latitude: Number,
   longitude: Number,
   countrycode: String,
   geonameid: Number
})

const locationsModel = mongoose.model('locations', locationsSchema, 'locations');
export default locationsModel;
