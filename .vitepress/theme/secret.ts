import CryptoJS from 'crypto-js'

export const encrypt = (text: string, password: string): string => {
    return CryptoJS.AES.encrypt(text, password).toString()
}

console.log(encrypt('示例文本内容，加密前的内容', 'password'))
