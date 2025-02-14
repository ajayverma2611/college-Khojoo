const College = require('../Models/College');

async function collegeDetails(req, res) {
    const { category, percentile, marks, gender, location } = req.body;
    console.log("location : ", location);
    
    try {
        const collegedata = await College.find({
            // Marks: {
            //     $gte: marks ? marks : 0,  // Default to 0 if no marks provided
            // },
            // Percentile: {
            //     $gte: percentile ? percentile : 0,  // Default to 0 if no percentile provided
            // },
            // State: {
            //     $regex: location ? new RegExp(location, 'i') : '',  // Case-insensitive search for location
            // },
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
