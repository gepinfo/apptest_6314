import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PhysicalAddressSchema = new Schema({
  created_date: { type: Date, default: Date.now },
  created_by: { type: String },
  last_modified_by: { type: String },
  last_modified_date: { type: Date, default: Date.now },
  name: { type: String, default: null },
  latitude: { type: Number, default: null },
  longitude: { type: Number, default: null },
  countrycode: { type: String, default: null },
  geonameid: { type: Number, default: null },
});

const PhysicalAddressModel = mongoose.model(
  "PhysicalAddress",
  PhysicalAddressSchema,
  "PhysicalAddress"
);
export default PhysicalAddressModel;
