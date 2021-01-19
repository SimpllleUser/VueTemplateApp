import router from "@/router";
import {LOGOUT_AUTH} from "@/store/modules/auth/types";

export default {
    [LOGOUT_AUTH]: function () {
        this.$local_storage.setItem('currentUser', {
            id: "",
            accessToken: "",
            username: ""
        })
        router.push('/sign-in')
    }
}
