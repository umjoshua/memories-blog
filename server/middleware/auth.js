import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    console.log(token)
    const isCustomAuth = token.length < 500;
    try {
        if (isCustomAuth) {
            const decodedData = jwt.verify(token, process.env.JWT_TOKEN);
            req.userId = decodedData?.id;
        } else {
            const decodedData = jwt.decode(token);
            req.userId = decodedData?.sub;
        }
        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;