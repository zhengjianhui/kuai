require('dotenv').config()

module.exports = {
  host: process.env.HOST,
  port: process.env.PORT,
  rpcUrl: process.env.CKB_RPC_URL || 'https://testnet.ckb.dev/rpc',
  lumosConfig: process.env.LUMOS_CONFIG || 'aggron4',
  redisPort: process.env.REDIS_PORT,
  redisHost: process.env.REDIS_HOST,
}
