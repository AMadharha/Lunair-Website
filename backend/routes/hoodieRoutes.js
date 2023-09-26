import express from 'express';
import { Hoodie } from '../models/hoodieModel.js';

const router = express.Router();

// Route to create a new hoodie
router.post('/', async (request, response) => {
    try {
        if(!request.body.imageUrl ||
           !request.body.name || 
           !request.body.price || 
           !request.body.color || 
           !request.body.size ||
           !request.body.description) {
            return response.status(400).send({
                message: 'Send all required fields: imageUrl, name, price, color, size, description.'
            });
        }

        const newHoodie = {
            imageUrl: request.body.imageUrl,
            name: request.body.name,
            price: request.body.price,
            color: request.body.color,
            size: request.body.size,
            description: request.body.description
        };

        const hoodie = await Hoodie.create(newHoodie);

        return response.status(201).send(hoodie);
    } catch(error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route to recieve all hoodies
router.get('/', async (request, response) => {
    try {
        const hoodies = await Hoodie.find({});
        return response.status(200).json({
            count: hoodies.length,
            data: hoodies
        });
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route to recieve a hoodie by id
router.get('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const hoodie = await Hoodie.findById(id);

        if(!hoodie) {
            return response.status(404).json({message: 'Hoodie not found.'});
        }

        return response.status(200).json(hoodie);
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route to update a hoodie
router.put('/:id', async (request, response) => {
    try {
        if(!request.body.imageUrl ||
           !request.body.name || 
           !request.body.price || 
           !request.body.color || 
           !request.body.size ||
           !request.body.description) {
            return response.status(400).send({
                message: 'Send all required fields: imageUrl, name, price, color, size, description.'
            });
        }

        const {id} = request.params;

        const result = await Hoodie.findByIdAndUpdate(id, request.body);

        if(!result) {
            return response.status(404).json({message: 'Hoodie not found.'});
        }

        return response.status(200).send({message: 'Hoodie updated successfully.'});
    } catch (error) {
        console.log(error.message);
        response.status(500).send({message: error.message});
    }
});

// Route to delete a hoodie
router.delete('/:id', async (request, response) => {
    try {
        const {id} = request.params;

        const result = await Hoodie.findByIdAndDelete(id);

        if(!result) {
            return response.status(404).json({message: 'Hoodie not found.'});
        }

        return response.status(200).send({message: 'Hoodie deleted successfully.'})
    } catch (error) {

    }
});

export default router;