
import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ItemTagsSchema = new Schema({
   created_date: { type: Date, default: Date.now },
   created_by: { type: String },
   last_modified_by: { type: String },
   last_modified_date: { type: Date, default: Date.now },
   itemtagslist: String
})

const ItemTagsModel = mongoose.model('ItemTags', ItemTagsSchema, 'ItemTags');
export default ItemTagsModel;
