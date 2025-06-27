import { getUsers } from '@/controllers/user.controller';
import prisma from '@/lib/prismaClient';
import { mockUsers } from '@/utils/mockdata';
import type { NextFunction, Request, Response } from 'express';

jest.mock('@/lib/prismaClient', () => ({
  __esModule: true,
  default: {
    user: {
      findMany: jest.fn()
    }
  }
}));

describe('getUsers Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
    mockRequest = {};
    jest.clearAllMocks();
  });

  it('returns users successfully', async () => {
    (prisma.user.findMany as jest.Mock).mockResolvedValue(mockUsers);

    await getUsers(
      mockRequest as Request,
      mockResponse as Response,
      mockNext as NextFunction
    );

    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      data: mockUsers,
      message: "Users retrieved successfully"
    });
  });
});