import bcrypt from 'bcryptjs';

export const hashPassword = async (
  password: string
): Promise<{ salt: string; passwordhash: string }> => {
  const salt = await bcrypt.getSalt('723292hdsdbdhwidhwiwhiwr38r832r2jbwsdsudasdsakdasdasdnajdbja');
  const passwordhash = await bcrypt.hash(password, salt);
  return { salt, passwordhash };
};

export const comparePassword = async (
  password: string,
  passwordhash: string
): Promise<boolean> => {
  return await bcrypt.compare(password, passwordhash);
};
