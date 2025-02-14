const College = require('../models/College');

async function collegeDetails(req, res) {
    const { category, percentile, marks, gender, location } = req.body;
    console.log("location : ", location);
    
    try {
        const collegedata = await College.find({
            Marks: {
                $lte: marks ? marks : 300,  // Default to 0 if no marks provided
            },
            Percentile: {
                $lte: percentile ? percentile : 100,  // Default to 0 if no percentile provided
            },
            State: {
                $regex: location ? new RegExp(location, 'i') : '',  // Case-insensitive search for location
            },
            Gender : gender,
            Category: category,
        });

        // Send the result back
        res.json(collegedata);
    } catch (error) {
        // Handle errors
        console.error("Error fetching college data: ", error);
        res.status(500).json({ message: 'Server error' });
    }
}



module.exports = collegeDetails;
