const jwt = require('jsonwebtoken');
const isAuthenticated = (req, res, next) => {
  
  const token =  req.cookies?.token;
  if(req.body._id){
      req.user_id = req.body._id;
      return next();
  }
  if(!token){
      console.log("token ",token);
      return res.status(400).json({
          message: "user not Logging",
          error : true,
          success : false
      })
  }
  jwt.verify(token,"djbvunvuwheoufheowhfwuhefuhifwuehi",
    function (err,decoded){
      if(err){
          console.log("error auth",err);
      }
      req.user_id = decoded?.id;
      next();
    }
  )
};

module.exports = isAuthenticated;
