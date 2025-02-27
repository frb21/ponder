import passport from 'passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import pool from '../config/dbconfig.js';

const jwt_key = 'a35b322df3342a2d5e4d0996a4128756773754f595cc13d8c5805fd79f08ec44';

passport.use(new Strategy({
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: jwt_key 
}, async (jwtPayload, done) => {
    const query = "SELECT * FROM users WHERE id = ?";
    const result = await pool.query(query, [jwtPayload.id]);
    const user = result[0];
    return user ? done(null, user) : done(null, false);
}));

export default passport;






















