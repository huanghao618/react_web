import { observable, action,autorun } from 'mobx'

import { aaa } from '@/utils/api'

export default class CnodeStore {
  @observable list = []
  // @action getCnodeList(params) {
  //   aaa(params).then(res=>{
  //     console.log('res', res)
  //     this.list = res
  //   })
  // }

  //自动运行
  getlist = autorun(()=>{
    let params={
      mdrender: false,
      tab: '',
      page: 1,
      limit: 5
    }
    aaa(params).then(res=>{
      console.log('res', res)
      this.list = res
    })
  })
}

  