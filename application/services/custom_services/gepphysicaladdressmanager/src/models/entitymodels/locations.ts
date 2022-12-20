
export interface locations 
{
   created_date: { type: Date },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date },
   name: String,
   latitude: Number,
   longitude: Number,
   countrycode: String,
   geonameid: Number
}
