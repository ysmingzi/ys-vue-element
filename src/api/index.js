import { post } from '@/utils/axios'


export const ysApi = {
    ysDemoPost:(p) => post(`/vue/demoList`,p)
}