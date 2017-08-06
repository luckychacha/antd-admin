import modelExtend from 'dva-model-extend'
import { config } from 'utils'
import { checkRSA } from '../../services/tools/rsatool'

export default {
  namespace: 'rsatool',
  state: {
    publicKey: '',
    privateKey: '',
    checkLoading: false,
    showCheckResult: false,
    checkResult: false,
  },

  effects: {
  	*checkRSA({
  		payload,
  	}, {put, call}) {

  		let resultPayload = {
  			'showCheckResult': true,
  			'checkResult': false,
  		};

  		payload.privateKey = payload.privateKey.replace(/\+/g, "%2B").replace(/\&/g, "%26");
			payload.publicKey = payload.publicKey.replace(/\+/g, "%2B").replace(/\&/g, "%26");

  		yield put({ type: 'setKeys', payload })
			const str = 'privateKey=' + payload.privateKey + '&publicKey=' + payload.publicKey;

			yield put ({ type: 'showLoading' })
  		const res = yield call(checkRSA, str)
			yield put ({ type: 'removeLoading' })

  		if (true == res.result) {
  			resultPayload.checkResult = true;
  		}
  		yield put ({type: 'setResult', payload: resultPayload})

  	}
  },

  reducers: {
  	setKeys (state, {payload}) {
  		return {
  			...state,
  			...payload
  		}
  	},

  	resetKeys (state, {payload}) {
  		return {
  			...state,
  			...payload
  		}
  	},

  	showLoading (state) {
  		return {
  			...state,
  			checkLoading: true
  		}
  	},

  	removeLoading (state) {
  		return {
  			...state,
  			checkLoading: false
  		}
  	},

  	setResult (state, {payload}) {
  		return {
  			...state,
  			...payload
  		}
  	},

  	resetShowResult (state) {
  		return {
  			...state,
  			showCheckResult: false
  		}
  	}
  }
}