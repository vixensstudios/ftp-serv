// Quick start, create an active ftp server.
const FtpSrv = require('ftp-srv');

const port=21;
const ftpServer = new FtpSrv({
    url: "ftp://0.0.0.0:" + port,
    anonymous: false
});

ftpServer.on('login', (data, resolve, reject) => { 
    if(data.username === 'anonymous' && data.password === 'anonymous'){
        return resolve({ root:"/" });    
    }
    return reject(new errors.GeneralError('Invalid username or password', 401));
});

ftpServer.listen().then(() => { 
    console.log('Ftp server is starting...')
});
