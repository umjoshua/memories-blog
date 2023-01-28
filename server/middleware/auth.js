import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({ msg: 'Authorization denied' });
    }
    try {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({ msg: 'Authorization denied' });

            } else {
                req.userId = decoded.id;
                next();
            }
        });
    } catch (error) {
        console.log(error);
    }
}

export default auth;