const Food = require('../../models/food');


module.exports = {
    index,
    delete: deleteOne,
    create,
    update
};

async function index(req, res) {
    try {
        const foods = await Food.find({});
        res.status(200).json(foods);
    } catch (err) {
        res.status(404).json(err)
    }
}

async function create(req, res) {
    console.log(req.user)
    try {
        req.body.userID = req.user._id
        const food = await Food.create(req.body);
        res.status(201).json(food);
    } catch (err) {
        res.status(404).json(err)
    }
}

async function deleteOne(req, res) {
    const deletedFood = await Food.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedFood);
}

async function update(req, res) {
    const updatedFood = await Food.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedFood);
}