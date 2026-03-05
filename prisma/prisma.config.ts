import type { PrismaConfig } from '@prisma/cli';

// Prisma 7 has moved datasource URLs out of schema.prisma. The config
// below provides the same connection details that were previously in the
// `url` attribute. Migrate commands will read from this file, and the
// runtime client will use the `adapter` option when instantiated.

export const config: PrismaConfig = {
    adapter: {
        provider: 'sqlite',
        url: process.env.DATABASE_URL,
    },
};
