import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Average = props => {

    const { min, max } = props

    return (
        <Card title='Média dos números' green>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{(min + max) / 2}</strong>
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

export default connect(mapStateToProps)(Average)