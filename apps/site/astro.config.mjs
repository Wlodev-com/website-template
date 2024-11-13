import { defineConfig } from 'astro/config'
import sitecenter from 'sitecenter/astro/adapter'

// https://astro.build/config
export default defineConfig({
    adapter: sitecenter({}),
})
