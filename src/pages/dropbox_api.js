// Some crap for KH

const dropboxV2Api = require('dropbox-v2-api');

// create session reference
const dropbox = dropboxV2Api.authenticate({
    client_id: 'osgnwmxhl49u6t2',
    client_secret : 'buqex2q6bgvhqbs',
    redirect_uri: 'https://tea-uni-lu.github.io/dropbox_data',
    token_access_type: 'offline',
});

const authUrl = dropbox.generateAuthUrl();
// after redirection you should receive code
dropbox.getToken(code, (err, result, response)) => {
    dropbox.refreshToken(response.refresh_token, (err, reult, response)) => {
        
    }
}
