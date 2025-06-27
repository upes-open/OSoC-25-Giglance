import { createUser } from '@/controllers/user.controller';
import prisma from '@/lib/prismaClient';
import { mockCreatedUser, mockUserData } from '@/utils/mockdata';
import type { NextFunction, Request, Response } from 'express';

jest.mock('@/lib/prismaClient', () => ({
  __esModule: true,
  default: {
    user: {
      create: jest.fn()
    }
  }
}));

describe('createUser Controller', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockNext: jest.Mock;

  beforeEach(() => {
    mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    mockNext = jest.fn();
    mockRequest = {
      body: mockUserData.valid
    };
    jest.clearAllMocks();
  });

  it('creates user successfully', async () => {
    (prisma.user.create as jest.Mock).mockResolvedValue(mockCreatedUser);

    await createUser(
      mockRequest as Request,
      mockResponse as Response,
      mockNext as NextFunction
    );

    expect(mockResponse.status).toHaveBeenCalledWith(201);
    expect(mockResponse.json).toHaveBeenCalledWith({
      success: true,
      data: mockCreatedUser,
      message: 'User created successfully'
    });
  });
});