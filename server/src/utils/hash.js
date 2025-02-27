import bcrypt from 'bcrypt';

const saltRounds = 10;

export const hashPassword = async (password) => {
    try{
        const hash = await bcrypt.hash(password, saltRounds);
        console.log('Hashed Password:', hash);
        return hash;
    }
    catch(err){
        console.error('Hashing error:', err);
    }
};

export const comparePassword = async (password, hashedPassword) => {
    try{
        const res = await bcrypt.compare(password, hashedPassword);
        return res;
    }
    catch(err){
        console.error('Password Comparison Error:', err);
    }
};










