import { mofish } from '@/utils/request'
import { GetMoFishZhiHuList } from './model/mofish'

interface Res {
  Code: number
  Message: string
  Data: {
    data: []
    page: number
  }
}

export function getMoFishZhiHuList(params: GetMoFishZhiHuList): Promise<Res> {
  return mofish.get('/mofish/v2/GetAllInfoGzip', { params })
}
