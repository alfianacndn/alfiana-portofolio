
export const state = () => ({
    selectedPage:'',
})

export const mutations = {
    setSelectedPage(state,payload){
        state.selectedPage = payload
    }
}