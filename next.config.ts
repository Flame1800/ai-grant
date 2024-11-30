import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true, // Игнорирует все ESLint-ошибки, включая Prettier
    },
};

export default nextConfig;
