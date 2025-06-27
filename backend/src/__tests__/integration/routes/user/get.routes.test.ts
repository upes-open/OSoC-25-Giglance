import request from 'supertest';
import app from '@/server/server';
import prisma from '@/lib/prismaClient';
import { mockUsers } from '@/utils/mockdata';

interface User {
  id: number;
  name: string;
  email: string;
}

// Remove Prisma mock - we want to use the real database for integration tests
// jest.mock('@/lib/prismaClient', () => ({...}));

describe('GET /api/users', () => {
  // Insert test users before tests
  beforeAll(async () => {
    // Clear users table to ensure clean state
    await prisma.user.deleteMany({});
    
    // Insert our mock data
    for (const user of mockUsers) {
      await prisma.user.create({
        data: user
      });
    }
  });

  // Clean up after tests
  afterAll(async () => {
    await prisma.user.deleteMany({});
    await prisma.$disconnect();
  });

  it('returns users successfully', async () => {
    const response = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(response.body).toMatchObject({
      success: true,
      message: "Users retrieved successfully",
    });
    expect((response.body as { data: User[] }).data[0]).toHaveProperty('name');
    // Check that we got the right number of users
    expect((response.body as { data: User[] }).data).toHaveLength(mockUsers.length);
    
    // Optionally, verify some properties of returned users
    expect((response.body as { data: User[] }).data[0]).toHaveProperty('id');
    expect((response.body as { data: User[] }).data[0]).toHaveProperty('name');
    const typedBody = response.body as { data: Array<{ email: string }> };
    expect(typedBody.data[0]).toHaveProperty('email');
  });
});