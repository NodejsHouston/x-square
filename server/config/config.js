module.exports = {
    server: {

            host: '127.0.0.1',
            port: 8000
    },
    database: {
        host: '127.0.0.1',
        port: 27017,
        db: 'xsquare',
        username: '',
        password: ''
    },
    key: {
        privateKey: '37LvDSm4XvjYOh9Y',
        tokenExpiry: 1 * 30 * 1000 * 60 //1 hour
    },
    email: {
        username: "test@x-square.com",
        password: "passwd",
        accountName: "test",
        verifyEmailUrl: "verifyEmail"
    }
};
