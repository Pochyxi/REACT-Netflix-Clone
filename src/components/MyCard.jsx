import { Component } from 'react'
import { Col } from 'react-bootstrap'

class MyCard extends Component {
    render() {
        return (
            <Col>
                <img className='img-fluid my-2 budka-img' src={this.props.img} alt="" />
            </Col>
        )
    }
}

export default MyCard