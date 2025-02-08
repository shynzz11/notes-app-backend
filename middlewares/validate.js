const Validate = (req , res , next) => {
    const title = req.body.title;
    const author = req.body.author;
    const description = req.body.description;
    if(!title || !author || !description){
        return res.status(400).json({message : "Please provide all required fields"});
    }
    next();
};

module.exports = Validate;