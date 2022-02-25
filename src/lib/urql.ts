import { cacheExchange, createClient, dedupExchange, fetchExchange, ssrExchange } from 'urql'

const isServerSide = typeof window == 'undefined'
const ssrCache = ssrExchange({isClient: !isServerSide})

const client = createClient({
    url: 'https://api-ap-southeast-2.graphcms.com/v2/cl02nta9hbmpc01zag82e5e8g/master',
    exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
})

export { client, ssrCache }