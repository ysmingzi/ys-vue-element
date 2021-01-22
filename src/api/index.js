import { post } from '@/utils/axios'


export const ysApi = {
    ysDemoPost:(p) => post(`/crmsalestarget/querysalestargettemplate?salesTargetCode=${p}`)
}