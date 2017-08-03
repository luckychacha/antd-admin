import React from 'react'
import RsaComponent from './RsaComponent'

const RsaTool = () => {

    const rsaProps = {

        onCheck (publicKey, privateKey) {
            alert('校验');
        },

        onReset () {
            alert('重置');
        }
    }

    return (
        <div className="content-inner">
            <RsaComponent {...rsaProps} />
        </div>
    )
}

export default RsaTool