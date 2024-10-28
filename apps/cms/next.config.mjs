import { withPayload } from '@payloadcms/next/withPayload'
import { withSitecenter } from 'sitecenter/payload'

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Your Next.js config here
}

export default withSitecenter(withPayload(nextConfig))
