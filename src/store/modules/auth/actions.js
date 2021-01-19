import router from "@/router";
import { SIGNIN_AUTH, SIGNUP_AUTH } from "./types"

export default {
    [SIGNIN_AUTH]: async function(commit, userData) {
        try {
            const { name, password } = userData
            const res = await this.$axios.post('/api/auth/signin', { username: name, password });
            if (res.data.accessToken) {
                this.$local_storage.setItem('currentUser', res.data)
                router.push('/')
            }
        } catch (err) {
            alert(JSON.stringify(err))
        }
    },
    [SIGNUP_AUTH]: async({ commit, state }, userData) => {
        try {
            const { name, email, password } = userData
            const res = await this.$axios.post('/api/auth/signup', { username: name, email, password });
            const { allow } = res.data
            allow && router.push('/sign-in')
        } catch (err) {
            alert(JSON.stringify(err))
        }
    }
}