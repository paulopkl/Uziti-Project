import { Request, Response } from "express";
import Beer from '../models/beer.model';

const GET_beer = async (req: Request, res: Response) => {
  try {
    const beerList = await Beer.find({}).sort('-createdAt-');
    res.status(200).json(beerList);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

const GET_ONE_beer = async (req: Request, res: Response) => {
  try {
    const { _id } = req.params;
    const beerList = await Beer.findById(_id);
    res.status(200).json(beerList);
  } catch (e) {
    res.status(500).send(e.message);
  }
}

const POST_beer = async (req: Request, res: Response) => {
  try {
    const beerList = await Beer.create({
      image_url: req.body.image_url,
      title: req.body.title,
      size: req.body.size,
      price: req.body.price,
      sale: req.body.sale,
      quantity: req.body.quantity
    });

    res.status(201).json(beerList || { message: 'Success!' });
  } catch (e) {
    res.status(500).send(e.message);
  }
}

const PUT_beer = async (req: Request, res: Response) => {
  try {
    const beerList = await Beer.findByIdAndUpdate(req.params._id, { $set: req.body });
    return res.status(201).json(beerList);
  } catch (e) {
    return res.status(500).send(e.message);
  }
}

const DELETE_beer = async (req: Request, res: Response) => {
  try {
    const beerList = await Beer.findByIdAndRemove(req.params._id);
    res.json(beerList || { message: 'Success!' });
  } catch (e) {
    res.status(500).send(e.message);
  }
}

export { GET_beer, GET_ONE_beer, POST_beer, PUT_beer, DELETE_beer }