const authorizeAdmin=(req,res,next)=>{
    if(req.user.role!='ADMIN'){
        return res.status(403).json({
            message:'access denied .admin only'
        });

    }
    next();
};

module.exports={
    authorizeAdmin
};