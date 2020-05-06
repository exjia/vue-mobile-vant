import Mock from 'mockjs'

import {
    getLatest,
    getTableData
} from './response/data'

Mock.mock(/\/getLatest/, 'get', getLatest)
Mock.mock(/\/getTableData/, 'post', getTableData)

export default Mock