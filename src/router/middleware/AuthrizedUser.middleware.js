import local_storage from "@/plugins/local_storage";

export default (to, from, next) => {
    const accessToken = local_storage().getItem('currentUser')?.accessToken || ""

    const pathIsToAuthPage = to.name === "SignIn" || to.name === "SignUp"
    if (accessToken?.length) {
        pathIsToAuthPage ? next({name: "Home"}) : next()
    } else {
        from.name === "SignIn" ? next({name: "SignUp"}) : next({name: "SignIn"})
    }
}
