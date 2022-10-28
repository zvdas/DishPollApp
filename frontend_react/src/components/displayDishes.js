import React, { useState } from 'react';
import { connect } from 'react-redux';
import { retrieveDishes, retrieveDishById } from '../redux/actions/api/actions';

function DisplayDishes({data}) {

    const [topThree, setTopThree] = useState([]);

    const voteDishes = (e) => {
        if(e.target.checked === true && topThree.length < 3) {
            setTopThree(topThree => [...topThree, e.target.value]);
        }

        if(e.target.checked === false) {
            setTopThree(topThree => topThree.filter(item => item !== e.target.value));
        }
    }

    const submitSelection = () => {
        // topThree.map(i => data.filter(x => x.id === parseInt(i)))
        console.log(topThree.map(i => data.filter(x => x.id === parseInt(i))));
    }

    let response;
    !data ? 
    response = <p><strong>No Data Found</strong></p> : 
    response =
    (
        <div className='card m-5'>
            <h2 className='card-header text-center'>Choose your top 3 favourite dishes from below</h2>
            <div className='card-body' style={{ maxHeight: 300, overflow: 'auto' }}>
                {/* map the payload data received from state through props to display each element of the object*/}
                {data.map((dish, index) => 
                    <div className='card-content d-flex m-5 justify-content-around align-items-center' key={index}>
                        <div className='col-4'>
                            <img src={dish.image} alt={dish.dishName} />
                        </div>

                        <div className='col-1'>
                            <input type='checkbox' value={dish.id} onClick={ voteDishes } />
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

    let choice;
    choice = 
    (
        <div className='card m-5'>
            <h2 className='card-header text-center'>You have chosen</h2>
            <div className='card-body text-center'>
                <div className="row">
                    <p className='col'>At <strong>30 points</strong>, your most favourite dish is { topThree[0] }</p>
                    <p className='col'>At <strong>20 points</strong>, your second favourite dish is { topThree[1] }</p>
                    <p className='col'>At <strong>10 points</strong>, your third favourite dish is { topThree[2] }</p>
                </div>
                <p>Click the button below to submit your selection</p>
                <button className='btn btn-primary' value={ data } onClick={ submitSelection }>Submit</button>
            </div>
        </div>
    )

    return (
        <div className='m-5'>
            <h2 className='text-center'>Choose Your Favourite Dishes</h2>
            <p className='text-center'>Below is a list of 30 food items. Choose your favourite 3 by clicking the checkbox next to the name of the dish.</p>
            <p className='text-center'>The first clicked item gets a rank of 30, the second 20 and third 10.</p>
            <p className='text-center'>If you want to change your selection, simply uncheck the box and select another.</p>
            { choice }
            <hr />
            { response }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        data : state.payload.db
    }
}

export default connect(mapStateToProps, { retrieveDishes, retrieveDishById })(DisplayDishes);