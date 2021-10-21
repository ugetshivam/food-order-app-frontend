import React, {useState, useEffect,Fragment} from 'react'
import axios from 'axios';
import FoodList from '../components/Food/FoodList';
const AllFood = () => {

    const [foods, setFoods] = useState([]);

    useEffect(()=>{
        async function getFoods(){
            try {
                const res = await axios.get('http://localhost:8000/allfoods');
                // console.log(res);
                setFoods(res.data);
            }
            catch (err){
                console.log(err.message);
            }
        }

        getFoods();
    }, [])


    return (
        <Fragment>
            <FoodList foods={foods}/>
        </Fragment>
    )
}

export default AllFood
