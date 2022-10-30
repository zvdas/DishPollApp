import { getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import app from '../configurations/firebase-config';
import { retrieveDishes, createNewDishesSelection } from '../redux/actions/firestore/actions';


function DisplayDishes({data}) {

    const [topThreeId, setTopThreeId] = useState([]);
    const [topThreeName, setTopThreeName] = useState([]);
    const [user, setUser] = useState({});
    const dispatch = useDispatch();

    onAuthStateChanged(getAuth(app), (currentUser) => {
        setUser(currentUser);
    })

    const voteDishes = (e) => {
        if(e.target.checked === true && topThreeId.length < 3) {
            setTopThreeId(topThreeId => [...topThreeId, e.target.value]);
        }
        
        if(e.target.checked === true && topThreeName.length < 3) {
            setTopThreeName(topThreeName => [...topThreeName, e.target.name]);
        }

        if(e.target.checked === false) {
            setTopThreeId(topThreeId => topThreeId.filter(item => item !== e.target.value));
            setTopThreeName(topThreeName => topThreeName.filter(item => item !== e.target.name));
        }
    }


    const submitSelection = () => {
        let selectedArray;
        // create an array of ranks
        let ranks = [30, 20, 10];
        selectedArray = 
        // loop through topThree array with index
        // topThree.map((item, index) => (
        topThreeId.map((item, index) => (
            // filter each element of the data array (from props)
            // the spread operator ...data will allow ranks to be added to each element of data array
            { ...data.filter(x => 
                // where the id of the element of data array is equal to element of topThree array
                // return the first element, since the filter result will be an array of 1 item
                // x.id === parseInt(item))[0], // if id is number
                x.id === item)[0], 
                // for each element of data array, add each element of the ranks array
                // eg : for data[0], add ranks[0] or 30, for data[1], add ranks[1] or 20, 
                rank: ranks[index] 
            }
        ));
        // console.log(selectedArray);
        // console.log(user.email);
        // console.log(user.uid);
        dispatch(createNewDishesSelection({"user_email": user.email, "user_id": user.uid, selectedArray}));
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
                            <input type='checkbox' name={dish.dishName} value={dish.id} onClick={ voteDishes } />
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
                    <p className='col'>At <strong>30 points</strong>, your most favourite dish is <strong>{ topThreeName[0] }</strong></p>
                    <p className='col'>At <strong>20 points</strong>, your second favourite dish is <strong>{ topThreeName[1] }</strong></p>
                    <p className='col'>At <strong>10 points</strong>, your third favourite dish is <strong>{ topThreeName[2] }</strong></p>
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
        data : state.payload
    }
}

export default connect(mapStateToProps, { retrieveDishes, createNewDishesSelection })(DisplayDishes);