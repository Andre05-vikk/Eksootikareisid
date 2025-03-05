import { z } from 'zod';
import bcrypt from 'bcryptjs';
import { query } from '../../lib/db';
import { signToken, JWTPayload } from '../../lib/jwt';

// Validation schemas
export const registerSchema = z.object({
  email: z.string().email('Vale e-posti formaat'),
  password: z.string().min(8, 'Salasõna peab olema vähemalt 8 tähemärki pikk'),
  confirmPassword: z.string(),
  phone: z.string().regex(/^\+?[1-9]\d{7,14}$/, 'Vale telefoni number'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Salasõnad ei kattu",
  path: ["confirmPassword"],
});

export const loginSchema = z.object({
  email: z.string().email('Vale e-posti formaat'),
  password: z.string(),
});

export interface RegisterData {
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  userId: number;
  token: string;
}

export async function registerUser(data: RegisterData): Promise<AuthResponse> {
  // Check if user already exists
  const existingUsers = await query(
    'SELECT id FROM users WHERE email = ?',
    [data.email]
  ) as any[];

  if (existingUsers.length > 0) {
    throw new Error('See e-posti aadress on juba kasutusel');
  }

  // Hash password
  const hashedPassword = await bcrypt.hash(data.password, 10);

  // Create user
  const result = await query(
    'INSERT INTO users (email, password, phone, created_at) VALUES (?, ?, ?, NOW())',
    [data.email, hashedPassword, data.phone]
  ) as any;

  const token = signToken({
    userId: result.insertId,
    email: data.email
  });

  return { 
    message: 'Konto on edukalt loodud',
    userId: result.insertId,
    token
  };
}

export async function loginUser(data: LoginData): Promise<AuthResponse> {
  const users = await query(
    'SELECT id, password FROM users WHERE email = ?',
    [data.email]
  ) as any[];

  const user = users[0];

  if (!user) {
    throw new Error('Vale e-post või salasõna');
  }

  const passwordMatch = await bcrypt.compare(data.password, user.password);

  if (!passwordMatch) {
    throw new Error('Vale e-post või salasõna');
  }

  const token = signToken({
    userId: user.id,
    email: data.email
  });

  return { 
    message: 'Edukalt sisse logitud',
    userId: user.id,
    token
  };
}
