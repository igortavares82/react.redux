import './Interval.css'
import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'
import { updateMinNumber, updateMaxNumber } from '../store/actions/numbers'

const Interval = props => {

    const { min, max } = props

    return (
        <Card title='Intervalo de números' red>
            <div className='interval'>
                <span>
                    <strong>Mínimo:</strong>
                    <input  type="number" 
                            value={min} 
                            onChange={e => props.updateMin(+e.target.value)} />
                </span>
                <span>
                    <strong>Máximo:</strong>
                    <input  type="number" 
                            value={max}
                            onChange={e => props.updateMax(+e.target.value)} />
                </span>
            </div>
        </Card>
    )    
}

function mapStateToProps(state) {
    return {
        min: state.numbers.min,
        max: state.numbers.max
    } 
}

function mapDispatchToProp(dispatch) {
    return {
        updateMin(newNumber) {
            const action = updateMinNumber(newNumber) // action creator -> action
            dispatch(action)
        },
        updateMax(newNumber) {
            const action = updateMaxNumber(newNumber)
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProp)(Interval)