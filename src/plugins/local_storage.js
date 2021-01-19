import SecureLS from "secure-ls";

const secureLocalStorage = new SecureLS({
    encodingType: "Base64",
    isCompression: true,
    encryptionSecret: process.env.VUE_APP_SECRET,
    encryptionNamespace: null
})

export default function (app = null, inject = null) {
    const getItem = (key) => {
        if (!key) return
        return JSON.parse(secureLocalStorage.get(key))
    }
    const setItem = (key, body) => {
        if (!key || !body) return
        secureLocalStorage.set(key, JSON.stringify(body))
        return true
    }
    const cleanItem = (key) => {
        if (!key) return
        secureLocalStorage.set(key, '')
        return true
    }
    const deleteItem = (key) => {
        if (!key) return
        secureLocalStorage.remove(key);
        return true
    }
    inject && inject('local_storage', {getItem, setItem, cleanItem, deleteItem});
    return {getItem, setItem, cleanItem, deleteItem}

}
