import { UserEntry } from './userEntryModel';

export const MEMORY_DB: Record<string, UserEntry> = {};

export const getUserByUsername = (username: string): UserEntry | undefined => {
  return MEMORY_DB[username];
};

export const getUserByEmail = (email: string): UserEntry | undefined => {
  return Object.values(MEMORY_DB).find((user) => user.email === email);
};

export const addUser = (username: string, user: UserEntry): void => {
  MEMORY_DB[username] = user;
};
