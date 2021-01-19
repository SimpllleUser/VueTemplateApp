export default  {
    methods:{
        showModal(refName){
            this.$refs[refName].show()
        },
        hideModal(refName){
            this.$refs[refName].hide()
        },
        toggleModal(refName, buttonId) {
            this.$refs[refName].toggle('#' + buttonId)
        }
    }
}