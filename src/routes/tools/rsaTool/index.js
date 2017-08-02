import React from 'react'
import RsaComponent from './RsaComponent'

const RsaTool = () => {

    const rsaProps = {

        onCheck (publicKey, privateKey) {
            alert(2)
        },

        onReset () {
            alert(1);
        }
    }

    return (
        <div className="content-inner">
            aaa
            <RsaComponent/>
            bbb
        </div>
    )
}

export default RsaTool