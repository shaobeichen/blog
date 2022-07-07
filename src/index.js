const { version } = require('../package.json')
const envConfig = require(`./env/${process.env.APP_ENV || process.env.NODE_ENV}.js`)

const isProduction = process.env.APP_ENV === 'production'

export default {
  isProduction,
  publicPath: '/_nuxt/',
  host: process.env.HOST || '0.0.0.0',
  port: process.env.PORT || 3000,
  // add timestamp for each build can clear page cache after release
  version: `${version}.${Date.now()}`,
  srcmBaseUrl: '//scrm-cbe.bulgari.cn',
  srcmTid: '1032079986',
  gtmId: 'GTM-KZFFLKB',
  gtmDataLayer: 'dataLayer',
  gtmScriptQuery: '&gtm_auth=PWszxJIz82O74ZOgQRSDag&gtm_preview=env-5&gtm_cookies_win=x',
  gaTrackingId: 'UA-65941188-22',
  liveChatUrl: `https://bvlgaritest.arvato-ocs.com/livechat/chatapp/customer/branch/Bvlgari/index.js?${Math.random()}`,
  ...envConfig,
}
