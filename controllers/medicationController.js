const asyncHandler = require('express-async-handler');

const getMedications = asyncHandler(async(req, res, next) => {
    res.status(200).json({message: 'Get all medications'});
})




module.exports = {
    getMedications,
}