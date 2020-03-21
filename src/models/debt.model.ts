import { Document, Schema, Model, model, Types } from 'mongoose';
import { CollectionsNames } from "../utils/consts";


export interface IDebt extends Document {
    _id: Types.ObjectId,
    memberId: Types.ObjectId,
    type: number,
    description: string,
    cost: number,
    relatedDate: Date,
    isPaid: boolean,
}

const DebtSchema: Schema<IDebt> = new Schema<IDebt>({
    _id: { type: Schema.Types.ObjectId },
    memberId: { type: Schema.Types.ObjectId },
    type: { type: Number },
    description: { type: String },
    cost: { type: Number },
    relatedDate: { type: Date },
    isPaid: { type: Boolean },
}, 
{ collection: CollectionsNames.Debt });

/* pre functions */
DebtSchema.pre<IDebt>('save', async function(next) {
    try {
        // Use any model controller for doing some stuff before save this document
        next()
    } catch(ex) {
        return next(ex);
    }
});

export const DebtModel: Model<IDebt> = model<IDebt>(CollectionsNames.Debt, DebtSchema);
