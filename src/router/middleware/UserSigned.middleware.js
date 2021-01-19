import local_storage from "@/plugins/local_storage";

export default (to, from, next) => {
    const accessToken = local_storage().getItem('currentUser')?.accessToken || ""

    if (accessToken?.length) {
        next({name: "Home"})
    } else {
        next()
    }
}
