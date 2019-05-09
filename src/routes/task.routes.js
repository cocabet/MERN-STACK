const express = require('express');
const router = express.Router();

const Task = require('../models/task');

router.get('/', async(req, res) => {
    const task = await Task.find();
    console.log(task);
    res.json(task);
   
});

router.get('/:id', async(req, res) =>{
    const task = await Task.findById(req.params.id);
    res.json(task);
});

router.post('/', async(req, res)=>{
    const { tittle, description} = req.body;
    const task = new Task({ tittle, description});
    await task.save();
    console.log(task);
    res.json({status: 'Tarea guardada'});
});

router.put('/:id', async (req, res) =>{
    const { tittle, description } = req.body;
    const newTask = { tittle, description };
    await Task.findByIdAndUpdate(req.params.id, newTask);
    res.json({status: 'Tarea actualizada'});
});

router.delete('/:id', async(req, res) => {
    await Task.findByIdAndRemove(req.params.id);
    res.json({status: 'Tarea eliminanda'});
});

module.exports = router;