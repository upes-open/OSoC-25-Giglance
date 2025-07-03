"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./prisma/index");
const prisma = new index_1.PrismaClient();
exports.default = prisma;
