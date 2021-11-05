import React, {useState, useEffect,Fragment, useContext} from 'react'
import axios from 'axios';
import FoodList from '../components/Food/FoodList';
import { LoginContext } from '../contexts/LoginContext';
const AllFood = () => {
    const logctx = useContext(LoginContext);
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
        if(logctx.isLoggedin){
            getFoods();
        }
    }, [logctx]);
    
    // console.log(logctx.isLoggedIn);

    if(!logctx.isLoggedin){
        return <h3 style={{marginTop:"100px", textAlign:"center"}}>You must be logged in to use the service</h3>
    }
    return (
        <Fragment>
            <FoodList foods={foods}/>
        </Fragment>
    )
}

export default AllFood
