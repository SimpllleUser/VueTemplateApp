export default (to, from, next) => {
    if (!localStorage.name) {
        next({name: 'Home'});
        return false;
    }
}
