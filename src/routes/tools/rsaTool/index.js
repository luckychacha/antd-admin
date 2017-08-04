import React from 'react'
import RsaComponent from './RsaComponent'

const RsaTool = () => {

    const rsaProps = {

        onCheck (publicKey, privateKey) {
            console.log(privateKey);
            console.log(publicKey);
        },

        onReset () {
            alert('重置');
        },

    }

    return (
        <div className="content-inner">
            <RsaComponent {...rsaProps} />
        </div>
    )
}

export default RsaTool