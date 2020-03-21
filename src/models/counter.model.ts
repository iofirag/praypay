import { Document, Schema, Model, model, Types } from 'mongoose';
import { CollectionsNames } from "../utils/consts";


export interface ICounter extends Document {
    _id: Types.ObjectId,
    sequenceValue: number
}

const CounterSchema: Schema<ICounter> = new Schema<ICounter>({
    _id: { type: Schema.Types.ObjectId },
    sequenceValue: { type: Number },
}, 
{ collection: CollectionsNames.Counter });

/* pre functions */
CounterSchema.pre<ICounter>('save', async function(next) {
    try {
        // Use any model controller for doing some stuff before save this document
        next()
    } catch(ex) {
        return next(ex);
    }
});

export const CounterModel: Model<ICounter> = model<ICounter>(CollectionsNames.Counter, CounterSchema);
