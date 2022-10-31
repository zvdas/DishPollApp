import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveAllOrderedDishes } from '../redux/actions/firestore/actions';

class DisplayDishesOrdered extends Component {
    render() {
        let orderedDishes = this.props.data;

        let response;
        !orderedDishes ?
        response = <p><strong>No Data Found</strong></p> : 
        response = 
        (
            <div className='card m-5'>
                <h2 className='card-header text-center'>Dish Ranking</h2>
                <div className='card-body' style={{ maxHeight: 300, overflow: 'auto' }}>
                        <div className='card-content d-flex m-5 justify-content-around align-items-center'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Image</th>
                                        <th scope='col'>Rank</th>
                                        <th scope='col'>Dish</th>
                                    </tr>
                                </thead>
                                
                                {orderedDishes.map((dish, index) => 
                                    <tbody>
                                        {dish.selectedArray.map(selected => 
                                            <tr key={index}>
                                                <td>
                                                    <img src={ selected.image } alt={ selected.dishName } />
                                                </td>
                                                <td><strong>{ selected.rank }</strong></td>
                                                <td>
                                                    <strong>{ selected.dishName }</strong>
                                                    <br/>
                                                    { selected.description }
                                                </td>
                                            </tr>
                                        )}
                                    </tbody>
                                )}
                            </table>
                        </div>
                </div>
            </div>
        )

        return (
            <div>
                {response}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        data: state.payload
    }
}

export default connect(mapStateToProps, { retrieveAllOrderedDishes })(DisplayDishesOrdered);