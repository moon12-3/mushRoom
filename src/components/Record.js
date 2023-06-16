import card from './card/zoo.png'
import card2 from './card/back.png'
import { useState } from 'react';
import $ from 'jquery';

function Record() {
    let [rot, setRot] = useState(true);



    return (
        <>
            <img src={card} className='size-up'/>
            <div className = {'container'}>
                <div className = {`card ${rot?'rot2':'rot'}`} onClick={()=>setRot(!rot)}>
                    <img src={card} className='front'/>
                    <img src={card2} className='back'/>
                </div>
            </div>
        </>
    )
}

export default Record;