export const validateSchema = (Schema) => (req, res, next) =>{
    try {
        Schema.parce(req.body);
        next();
        
    } catch (error) {
        return res.status(400).json({ error: error.errors.map((error) => error.message) });
        
    }
    

    
}