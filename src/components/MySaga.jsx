import { Component } from 'react'
import { Container } from 'react-bootstrap';
import { CaretLeftFill, CaretRightFill } from 'react-bootstrap-icons'
import MyCard from './MyCard';

class MySaga extends Component {
    scrollRight() {
        document.getElementById('rambo').scrollLeft -= 200;
    }
    scrollLeft() {
        document.getElementById('rambo').scrollLeft += 200;
    }
    render() {
        return (
            <Container className='text-light' fluid>
                <h3>{this.props.title}</h3>

                <div id='rambo' className="row row-cols-1 flex-lg-nowrap overflow-scroll row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 mb-4 no-gutters text-center budka-saga">
                    {
                        this.props.saga.map(film => (
                            <MyCard key={film.imdbID} img={film.Poster} />
                        ))
                    }
                </div>
                <div className='d-none d-lg-flex justify-content-between pb-3'>
                    <button className='budka-button' onClick={(e) => {
                        this.scrollRight();
                    }}><CaretLeftFill /></button>
                    <button className='budka-button' onClick={(e) => {
                        this.scrollLeft();
                    }}><CaretRightFill /></button>
                </div>

            </Container>
        )
    }
}

export default MySaga;