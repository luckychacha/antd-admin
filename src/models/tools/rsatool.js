import modelExtend from 'dva-model-extend'
import { config } from 'utils'

export default {
  namespace: 'rsatools',
  state: {
    publicKey: '',
    privateKey: '',
    checkLoading: false,
  }
}