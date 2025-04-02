/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Remova ou atualize esta linha conforme necessário
    serverExternalPackages: ["package-name"], // Substitua pelo nome correto
  },
  // Remova esta linha se não for suportada
  swcMinify: true,
};

module.exports = nextConfig;

