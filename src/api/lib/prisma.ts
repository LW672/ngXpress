import { PrismaClient } from '../../generated/prisma/client.js';
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma =
    globalForPrisma.prisma ||
    new PrismaClient({
        log: ['warn', 'error'],
        // construct a real adapter factory instance instead of raw object
        adapter: new PrismaBetterSqlite3({
            url: process.env['DATABASE_URL'] ?? ':memory:',
        }),
    });

if (process.env['NODE_ENV'] !== 'production') globalForPrisma.prisma = prisma;