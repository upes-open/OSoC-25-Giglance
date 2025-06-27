import { mockUserData } from '@/utils/mockdata';
import { z } from 'zod';

const UserSchema = z.object({
  id: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  createdAt: z.date(),
  updatedAt: z.date()
});

describe('User Schema', () => {
  it('validates correct user data', () => {
    const result = UserSchema.safeParse({
      id: '1',
      ...mockUserData.valid,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    expect(result.success).toBe(true);
  });

  it('fails with invalid data', () => {
    const result = UserSchema.safeParse({
      id: '1',
      ...mockUserData.invalid,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    expect(result.success).toBe(false);
  });
});