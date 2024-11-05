import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
    const jwt_secret = "qeUS+MB/VezUJtljlC6Cm3ruJGRyq+5D4jjHxuQm2wk=" ;
    const token = jwt.sign({userId}, jwt_secret ,{
        expiresIn : "15d", 
        } )
    
    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 *1000,
        httpOnly : false,
        // sameSite: "strict",
    })    

}

export default generateTokenAndSetCookie;