import { v4 } from 'uuid';
import bcrypt from 'bcrypt';

interface returnType {
  cryptedToken: String;
  token: String;
}

const generateToken = async () : Promise<returnType> => {
  const token = v4();
  const cryptedToken = await bcrypt.hash(token, 10);
  return {
    cryptedToken,
    token,
  }
}

export default generateToken;