import request from 'supertest';
import app from '@/server/server';
import prisma from '@/lib/prismaClient';
import { mockCreatedUser, mockUserData } from '@/utils/mockdata';

jest.mock('@/lib/prismaClient', () => ({
  __esModule: true,
  default: {
    user: {
      create: jest.fn(),
    },
  },
}));

describe('POST /api/users', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('creates a user successfully', async () => {
    (prisma.user.create as jest.Mock).mockResolvedValue(mockCreatedUser);
    
    const response = await request(app)
      .post('/api/users')
      .send(mockUserData.valid)
      .expect('Content-Type', /json/)
      .expect(201);
    
    expect(response.body).toEqual({
      success: true,
      data: {
        id: mockCreatedUser.id,
        email: mockCreatedUser.email,
        name: mockCreatedUser.name,
        createdAt: mockCreatedUser.createdAt.toISOString(),
        updatedAt: mockCreatedUser.updatedAt.toISOString(),
      },
      message: 'User created successfully'
    });

    expect(prisma.user.create).toHaveBeenCalledWith({
      data: mockUserData.valid
    });
  });
});