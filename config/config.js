const config={
    default : {
        DATABASE: 'mongodb+srv://root:root@cluster0.patpq.mongodb.net/bitcoinAPI?retryWrites=true&w=majority'
    }
}


exports.get = function get(env){
    return config[env] || config.default
}