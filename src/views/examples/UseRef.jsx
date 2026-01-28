import React, {useState, useRef, useEffect} from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const merge = function(s1, s2){
    const s1_size = s1.length
    const s2_size = s2.length
    let result = ""
    let ref_s1 = 0
    let ref_s2 = 0
    let status = 1

    if(s1_size === 0 && s2_size === 0)
        return result

    if(s2_size === 0 && s1_size > 0)
        return s1
    else if(s1_size === 0 && s2_size > 0)
        return s2

    for(let i = 0; i < (s1_size + s2_size); i++){
        if(status === 1){
            result += s1[ref_s1++]
            if(ref_s2 < s2_size)
                status = 2
        }else if(status === 2){
            result += s2[ref_s2++]
            if(ref_s1 < s1_size)
                status = 1
        }
    }

    return result
}

const UseRef = (props) => {
    const [value1, setValue1] = useState("")
    const [value2, setValue2] = useState("")

    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function() {
        count.current = count.current + 1
        myInput2.current.focus()
    }, [value1])
    
    useEffect(function() {
        count.current = count.current + 1
        myInput1.current.focus()
    }, [value2])

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title="Exercício #01"/>
            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{merge(value1, value2)} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input 
                    type="text"
                    className="input"
                    ref={myInput1}
                    value={value1}
                    onChange={e => setValue1(e.target.value)}
                />
            </div>

            <SectionTitle title="Exercício #02"/>
            <div className="center">
                <input 
                    type="text"
                    className="input"
                    ref={myInput2}
                    value={value2}
                    onChange={e => setValue2(e.target.value)}
                />
            </div>
        </div>
    )
}

export default UseRef
