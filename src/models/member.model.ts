import { Document, Schema, Model, model, Types } from 'mongoose';
import { CollectionsNames } from "../utils/consts";


export interface IMember extends Document {
    _id: Types.ObjectId,
    synagogueId: Types.ObjectId,
    userId: Types.ObjectId,
    sequence?: number,
    nationalId: string,
    email: string,
    phone: string,
    firstName: string,
    lastName: string,
    address: string,
    father: {
        name: string,
        date?: Date
    },
    mother: {
        name: string,
        date?: Date
    },
    birthday: Date,
    roleIdList: Types.ObjectId[]
}

const MemberSchema: Schema<IMember> = new Schema<IMember>({
    _id: { type: Schema.Types.ObjectId },
    synagogueId: { type: Schema.Types.ObjectId },
    userId: { type: Schema.Types.ObjectId },
    sequence: { type: Number },
    nationalId: { type: String },
    email: { type: String },
    phone: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    address: { type: String },
    father: {
        name: { type: String },
        date: { type: Schema.Types.Date },
    },
    mother: {
        name: { type: String },
        date: { type: Schema.Types.Date },
    },
    birthday: { type: Schema.Types.Date },
    roleIdList: [{ type: Schema.Types.ObjectId }]
},
{ collection: CollectionsNames.Member });

/* pre functions */
MemberSchema.pre<IMember>('save', async function(next) {
    try {
        // Use any model controller for doing some stuff before save this document
        next()
    } catch(ex) {
        return next(ex);
    }
});

export const MemberModel: Model<IMember> = model<IMember>(CollectionsNames.Member, MemberSchema);
