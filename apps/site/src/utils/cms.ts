import { initPayloadClient } from 'sitecenter/astro'
import type { Config } from '../../../cms/src/payload-types'

export const cms = initPayloadClient<Config>({
    url: `${import.meta.env.CMS_URL}/api`,
})
