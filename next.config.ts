import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    defaultLocale: 'et',
    locales: ['et', 'en', 'lt', 'lv', 'ru'],
    localeDetection: false
  }
};

export default nextConfig;
