import prisma from '@/lib/prismaClient';

// Mock the Prisma client
jest.mock('@/lib/prismaClient', () => ({
  __esModule: true,
  default: {
    user: {
      findMany: jest.fn(),
      create: jest.fn(),
    },
  },
}));

beforeEach(() => {
  jest.clearAllMocks();
});

export const mockedPrisma = prisma as jest.Mocked<typeof prisma>;