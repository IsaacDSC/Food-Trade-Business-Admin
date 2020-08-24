const getCrypto = () => {
    var alg = 'aes-256-cbc'
    var pwd = 'iiiiiiiiiiiiiiiiiiiiiiiiiiiiiiii'
    return { pwd, alg }
}

exports.getCrypto = getCrypto