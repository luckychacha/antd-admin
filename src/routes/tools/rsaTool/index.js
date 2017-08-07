import React from 'react';
import { connect } from 'dva';
import { RsaComponent } from 'components';

const RsaTool = ({
  dispatch,
  rsatool
}) => {

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

        ...rsatool
    }

    return (
        <div className="content-inner">
            <RsaComponent {...rsaProps} />
        </div>
    )
}

export default connect( ({rsatool}) => ({rsatool}) )(RsaTool)