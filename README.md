# pokedex-server
Express.js project with firebase db

#Start in dev mode
`npm run dev`
But before:
1. Create file `dev.env` in `config` directory (inside root dir)
2. Set constants:
   - PORT
   and firebase constants (which can be generated via your firebase console):
   - FS_CONFIG_TYPE
   - FS_CONFIG_PROJECT_ID
   - FS_CONFIG_PRIVATE_KEY_ID
   - FS_CONFIG_PRIVATE_KEY
   - FS_CONFIG_CLIENT_EMAIL
   - FS_CONFIG_CLIENT__ID
   - FS_CONFIG_AUTH_URI
   - FS_CONFIG_TOKEN_URI
   - FS_CONFIG_AUTH_PROVIDER_X509_CERT_URL
   - FS_CONFIG_CLIENT_X509_CERT_URL
