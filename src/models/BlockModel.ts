import mongoose from "mongoose";

/**
 * @description holds Block model
 */

/**
 * Block interface
 */
export interface IBlock extends mongoose.Document {
  id: string;
  Hash: string;
  transform: () => IBlock;
}

/**
 * Block schema
 */
const schema: mongoose.SchemaDefinition = {
  Hash: { type: mongoose.SchemaTypes.String, required: true, unique: true }
};

// Block collection name
const collectionName: string = "devnet_blocks";

const BlockSchema: mongoose.Schema = new mongoose.Schema(schema);

/**
 * transforms Block object,
 * changes _id to id
 */
BlockSchema.methods.transform = function () {
  var obj = this.toObject();

  var id = obj._id;
  delete obj._id;
  obj.id = id;

  return obj;
};

/**
 * creates Block model
 * @param conn database connection
 * @returns Block model
 */
const BlockModel = (conn: mongoose.Connection): mongoose.Model<IBlock> =>
  conn.model<IBlock>(collectionName, BlockSchema);

export default BlockModel;
