const getAllusers = (req, res)=>{
    res.status(200).json({
        message: "all users"
    })
}

module.exports = {getAllusers}