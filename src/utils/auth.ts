import {genSalt, hash, compare} from 'bcrypt';

export const hashPassword = async (password: string) => {
  const salt = await genSalt(10);
  return await hash(password, salt);
};

export const checkPassword = async (password: string, hash: string) => {
  return await compare(password, hash);
};
