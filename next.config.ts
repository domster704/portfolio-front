import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.portfolio.ln-kr.ru",
        port: "",
        pathname: "/uploads/**",
      }
    ],
  },
  turbopack: {
    rules: {
      "*": [
        {
          condition: {
            all: [
              { not: "foreign" },
              { path: "*.svg" },
              { query: /[?&]component(?=&|$)/ },
            ],
          },
          loaders: ["@svgr/webpack"],
          as: "*.tsx",
        },
      ],
    },
  }
};

export default nextConfig;
