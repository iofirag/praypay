import { Document, Schema, Model, model, Types } from 'mongoose';
import { CollectionsNames } from "../utils/consts";


export interface ISynagogue extends Document {
    _id: Types.ObjectId,
    sequence: number,
    name: string,
    address: string,
    bankInfo: {
        bankNumber: string,
        branchNumber: string,
        accountNumber: string,
        accountName: string,
    }
}

const SynagogueSchema: Schema<ISynagogue> = new Schema<ISynagogue>({
    _id: { type: Schema.Types.ObjectId },
    sequence: { type: Number },
    name: { type: String },
    address: { type: String },
    bankInfo: {
        bankNumber: { type: String },
        branchNumber: { type: String },
        accountNumber: { type: String },
        accountName: { type: String },
    }
},
{ collection: CollectionsNames.Synagogue });

/* pre functions */
SynagogueSchema.pre<ISynagogue>('save', async function(next) {
    try {
        // Use any model controller for doing some stuff before save this document
        next()
    } catch(ex) {
        return next(ex);
    }
});

export const SynagogueModel: Model<ISynagogue> = model<ISynagogue>(CollectionsNames.Synagogue, SynagogueSchema);
