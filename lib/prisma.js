// Configuración centralizada de Prisma para Prisma 7
// Este archivo exporta una instancia única del cliente de Prisma

const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

//const pool = new Pool({
//  connectionString: process.env.DATABASE_URL });
//const adapter = new PrismaPg(pool);
//const prisma = new PrismaClient({ adapter });

try {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });
  console.log('Prisma inicializado correctamente');
  module.exports = prisma;
} catch (error) {
  console.error('Error al inicializar Prisma:', error);
  process.exit(1);
}
