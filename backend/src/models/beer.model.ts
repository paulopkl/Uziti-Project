import { Model, Schema, model, Document } from 'mongoose';

interface BeerInterface extends Document {
    image_url: string;
    title: string;
    size: string;
    price: number;
    sale: string;
    quantity: number;
}

const beerSchema: Schema = new Schema({
    image_url: { type: String, required: true },
    title: { type: String, required: true },
    size: { type: String },
    price: { type: Number, required: true },
    sale: { type: String },
    quantity: { type: Number, required: true },
});

const Beer: Model<BeerInterface> = model('Beer', beerSchema);

export default Beer;