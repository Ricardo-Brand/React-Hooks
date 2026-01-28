import React, { useReducer } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

import {initialState, reducer} from '../../store/index'
import {numberAdd2, login} from '../../store/actions'

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            
            <SectionTitle title="Exercício #01" />
            <div className="center">

                {state.user ? 
                <span className='text'>{state.user.name}</span> :
                <span className='text'>Sem usuário</span>
                }

                <span className="text"></span>
                <span className="text">{state.number}</span>
                <div>
                    <button className="btn" onClick={() => login(dispatch, 'Ricardo')}>login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberMult7'})}>x 7</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberDiv25'})}>/ 25</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberParseInt'})}>Int</button>
                    <button className="btn" onClick={() => dispatch({type: 'numberAdd', add: 5})}>add n</button>
                </div>
            </div>
        </div>
    )
}

export default UseReducer
