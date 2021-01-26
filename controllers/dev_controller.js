const backModel = require('../models/back_dev_module')
const frontModel = require('../models/front_dev_module') 

// Desc    get all front devs
// Route   Get /front
exports.getFrontDev = async (req, res) => {
    const dev = await frontModel.find()

    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })
}



// Desc    add front dev
// Route   Post /front
exports.addFrontDev = async (req, res) => {
    const dev = await frontModel.create(req.body)
    
    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })
}



// Desc    get single front dev
// Route   Get /front/:id
exports.getSingleFrontDev = async (req, res) => {
    const dev = await frontModel.findById(req.params.id)

    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })    
}



// Desc    update front dev
// Route   Put /front/:id
exports.updateFrontDev = async (req, res) => {
    const dev = await frontModel.findByIdAndUpdate(req.params.id,req.body)

    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })    
}



// Desc    delete front dev
// Route   Delete /front/:id
exports.deleteFrontDev = async (req, res) => {
    const dev = await frontModel.findByIdAndDelete(req.params.id)

    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })
}



// Desc    get all Back devs
// Route   Get /back
exports.getBackDev = async (req, res) => {
    const dev = await backModel.find()

    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })
}



// Desc    add back dev
// Route   Post /back
exports.getBackDev = async (req, res) => {
    const dev = await backModel.create(req.body)
    
    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })
}



// Desc    get single back devs
// Route   Get /back/:id
exports.getSingleBackDev = async (req, res) => {
    const dev = await backModel.findById(req.params.id)

    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev }) 
}



// Desc    update back dev
// Route   Put /back/:id
exports.updateBackDev = async (req, res) => {
    const dev = await backModel.findByIdAndUpdate(req.params.id,req.body)

    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })    
}




// Desc    delete back dev
// Route   Delete /back/:id
exports.deleteBackDev = async (req, res) => {
    const dev = await backModel.findByIdAndDelete(req.params.id)

    if(!dev)
    {
        return res.status(400).json({ success: false })
    }

    res.status(200).json({ success: true, data: dev })
}