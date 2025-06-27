import type { User } from '@/lib/prisma';

export const mockUserData = {
  valid: {
    name: 'Test User',
    email: 'test@example.com'
  },
  invalid: {
    name: '',
    email: 'invalid-email'
  }
};

export const mockUsers: User[] = [
  { 
    id: '1', 
    name: 'User 1', 
    email: 'user1@example.com', 
    createdAt: new Date(), 
    updatedAt: new Date() 
  },
  { 
    id: '2', 
    name: 'User 2', 
    email: 'user2@example.com', 
    createdAt: new Date(), 
    updatedAt: new Date() 
  }
];

export const mockCreatedUser: User = {
  id: '123',
  name: 'Test User',
  email: 'test@example.com',
  createdAt: new Date(),
  updatedAt: new Date()
};