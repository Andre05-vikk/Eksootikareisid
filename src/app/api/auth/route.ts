import { NextResponse } from 'next/server';
import { z } from 'zod';
import { query } from '@/lib/db';
import bcrypt from 'bcryptjs';

// Validation schemas
const registerSchema = z.object({
  email: z.string().email('Vale e-posti formaat'),
  password: z.string().min(8, 'Salasõna peab olema vähemalt 8 tähemärki pikk'),
  confirmPassword: z.string(),
  phone: z.string().regex(/^\+?[1-9]\d{7,14}$/, 'Vale telefoni number'),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Salasõnad ei kattu",
  path: ["confirmPassword"],
});

const loginSchema = z.object({
  email: z.string().email('Vale e-posti formaat'),
  password: z.string(),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { type } = body;

    if (type === 'register') {
      const validatedData = registerSchema.parse(body);
      
      // Check if user already exists
      const existingUsers = await query(
        'SELECT id FROM users WHERE email = ?',
        [validatedData.email]
      ) as any[];

      if (existingUsers.length > 0) {
        return NextResponse.json(
          { error: 'See e-posti aadress on juba kasutusel' },
          { status: 400 }
        );
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      // Create user
      const result = await query(
        'INSERT INTO users (email, password, phone, created_at) VALUES (?, ?, ?, NOW())',
        [validatedData.email, hashedPassword, validatedData.phone]
      ) as any;

      return NextResponse.json({ 
        message: 'Konto on edukalt loodud',
        userId: result.insertId
      });

    } else if (type === 'login') {
      const validatedData = loginSchema.parse(body);

      const users = await query(
        'SELECT id, password FROM users WHERE email = ?',
        [validatedData.email]
      ) as any[];

      const user = users[0];

      if (!user) {
        return NextResponse.json(
          { error: 'Vale e-post või salasõna' },
          { status: 401 }
        );
      }

      const passwordMatch = await bcrypt.compare(validatedData.password, user.password);

      if (!passwordMatch) {
        return NextResponse.json(
          { error: 'Vale e-post või salasõna' },
          { status: 401 }
        );
      }

      // TODO: Add session handling here

      return NextResponse.json({ 
        message: 'Edukalt sisse logitud',
        userId: user.id
      });
    }

    return NextResponse.json(
      { error: 'Vale päring' },
      { status: 400 }
    );

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: error.errors[0].message },
        { status: 400 }
      );
    }

    console.error('Auth error:', error);
    return NextResponse.json(
      { error: 'Serveri viga' },
      { status: 500 }
    );
  }
}
