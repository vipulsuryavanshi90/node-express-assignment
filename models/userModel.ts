export interface User {
  username: string;
  email: string;
  type: 'user' | 'admin';
  password: string;
}
