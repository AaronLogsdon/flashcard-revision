import { db } from './firebase';


export const onceGetUsers = () =>
  db.ref('users').once('value');

// Other Entity APIs ...