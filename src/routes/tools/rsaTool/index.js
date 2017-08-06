import React from 'react';
import RsaComponent from './RsaComponent';
import { connect } from 'dva';

const RsaTool = ({
  dispatch,
  rsatool
}) => {

    const {
      publicKey,
      privateKey,
      checkLoading,
      checkResult,
      showCheckResult,
    } = rsatool

    const rsaProps = {

        onCheck (publicKey, privateKey) {

            const payload = {
              'publicKey': publicKey,
              'privateKey': privateKey
            }

            dispatch({ type: 'rsatool/checkRSA', payload })
        },

        onReset () {
            const payload = {
              publicKey: '',
              privateKey: '',
              checkLoading: false,
              showCheckResult: false,
              checkResult: false,
            }

            dispatch({ type: 'rsatool/resetKeys', payload})
        },

        resetShowResult () {
          dispatch({ type: 'rsatool/resetShowResult'})
        },

        publicKey,
        privateKey,
        checkLoading,
        checkResult,
        showCheckResult,
    }

    return (
        <div className="content-inner">
            <RsaComponent {...rsaProps} />
        </div>
    )
}

export default connect( ({rsatool}) => ({rsatool}) )(RsaTool)