import axios from './index'

export const getLatest = () => {
    return axios.request({
        url: 'kpi/system/task/getLatest',
        method: 'get'
    })
}

export const getTableData = ({
    userId
}) => {
    return axios.request({
        url: '/index/getTableData',
        method: 'post',
        data: {
            userId
        }
    })
}