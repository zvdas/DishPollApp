import React from 'react';
import { connect } from 'react-redux';
import { retrieveDishes, retrieveDishById } from '../redux/actions/api/actions';

function DisplayDishes({data}) {
    let response;
    !data ? 
    response = <p><strong>No Data Found</strong></p> : 
    response =
    (
        <div className='card m-5'>
            <h2 className='card-header text-center'>Display Dishes</h2>
            <div className='card-body'>
            {data.map(dish => 
                <div className='card-content d-flex m-5 justify-content-around align-items-center' key={dish.id}>
                    <div className='col-4'>
                        <img src={dish.image} alt={dish.dishName} />
                    </div>

                    <div className='col-1'>
                        <input type='checkbox' name='' />
                    </div>

                    <div className='col'>
                        <p>
                            <strong>{ dish.dishName }</strong>
                            <br/>
                            { dish.description }
                        </p>
                    </div>
                </div>
            )}
            </div>
        </div>
    )

    return (
        <div>
            {response}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data : state.payload.db
    }
}

export default connect(mapStateToProps, { retrieveDishes, retrieveDishById })(DisplayDishes);