import {sign, verify, decode} from "jsonwebtoken"
import { envObject } from './env';

export function genJWT(id: number) {
  return sign({ id }, envObject.JWT_SECRET, {
    expiresIn: '7d',
  });
}
export const getUserJWT = (token: string) => {
  return verify(token, envObject.JWT_SECRET);
};
export const decJWT = (password: string) => {
  return decode(password);
};
