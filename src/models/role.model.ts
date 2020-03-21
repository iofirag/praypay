import { Document, Schema, Model, model, Types } from 'mongoose';
import { CollectionsNames } from "../utils/consts";


export interface IRole extends Document {
    _id: Types.ObjectId,
    type: number,
    title: string,
}

const RoleSchema: Schema<IRole> = new Schema<IRole>({
    _id: { type: Schema.Types.ObjectId },
    type: { type: Number },
    title: { type: String },
}, 
{ collection: CollectionsNames.Role });

/* pre functions */
RoleSchema.pre<IRole>('save', async function(next) {
    try {
        // Use any model controller for doing some stuff before save this document
        next()
    } catch(ex) {
        return next(ex);
    }
});

export const RoleModel: Model<IRole> = model<IRole>(CollectionsNames.Role, RoleSchema);
