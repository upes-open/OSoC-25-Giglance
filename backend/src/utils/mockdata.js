"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockCreatedUser = exports.mockUsers = exports.mockUserData = void 0;
exports.mockUserData = {
    valid: {
        name: 'Test User',
        email: 'test@example.com'
    },
    invalid: {
        name: '',
        email: 'invalid-email'
    }
};
exports.mockUsers = [
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
exports.mockCreatedUser = {
    id: '123',
    name: 'Test User',
    email: 'test@example.com',
    createdAt: new Date(),
    updatedAt: new Date()
};
