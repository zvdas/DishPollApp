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
                <div className='card-body'>
                        <div className='card-content d-flex m-5 justify-content-around align-items-center'>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope='col'>Image</th>
                                        <th scope='col'>Rank</th>
                                        <th scope='col'>Dish</th>
                                    </tr>
                                </thead>
                                
                                {/**/}
                                {orderedDishes.reduce((rank, data) => 
                                    <tbody>
                                    {data.selectedArray.map(name => 
                                        <tr>
                                            <td>
                                                <img src={ name.image } alt={ name.dishName } />
                                            </td>
                                            <td>{(rank[name.dishName] || 0) + parseInt(name.rank)}</td>
                                            <td>
                                                <strong>{ name.dishName }</strong>
                                                <br/>
                                                { name.description }
                                            </td>
                                        </tr>
                                    )}
                                    </tbody>
                                )}
                                {/**/}

                                {/*
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
                                */}
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