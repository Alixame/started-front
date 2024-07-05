import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default withPWA({
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
    register: true,
    skipWaiting: true,
})(withNextIntl(nextConfig));