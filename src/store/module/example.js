import {
    getLatest
} from '@/api/example'
const state = {
    userName: 'lison',
    taskList: [],
    loading: false
}
const actions = {
    handleQueryBygetTaskList({
        commit
    }, GetTaskListData) {
        commit('sendin')
            // reject是把数据传递给then方法的第二个function处理，then方法可以接收2个参数
        return new Promise((resolve, reject) => {
            getLatest(GetTaskListData)
                .then(res => {
                    commit('setGetTaskList', res)
                    commit('success')
                    resolve()
                })
                .catch(err => {
                    commit('success')
                    reject(err)
                })
        })
    }
}
const mutations = {
    setGetTaskList(state, data) {
        state.taskList = data.data
    },
    sendin(state) {
        state.loading = true
    },
    success(state) {
        state.loading = false
    }
}
export default {
    state,
    mutations,
    actions
}