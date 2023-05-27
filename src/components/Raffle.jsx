import React from 'react'
import Card from './Card'
import { connect } from 'react-redux'

const Raffle = props => {

    const { min, max } = props
    const raffle = parseInt(Math.random() * (max - min) + min)

    return (
        <Card title='Sorteio de um número' purple>
            <div>
                <span>
                    <span>Resultado:</span>
                    <strong>{raffle}</strong>
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

export default connect(mapStateToProps)(Raffle)