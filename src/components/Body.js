import ReastrauntCard from './ReastrauntCard'
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer';

const Body = () =>{
    const [listOfRestaurants, setListOfRestraunt] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);

    useEffect(()=>{
      fetchData();
    },[])

    const fetchData = async () =>{
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
      const json = await data.json();
      console.log(json);
      setListOfRestraunt(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards)
    }

    const [searchText, setSearchText] = useState("");
   
    if(listOfRestaurants.length === 0){
      return <Shimmer/>
    } 
    

    return(
    <div className='body'>
      <div className='filter'>
        <div className='search'>
          <input type='text' className='search-box' value={searchText} onChange={(e)=>{
            setSearchText(e.target.value);
          }}/>
          <button onClick={() =>{
            const filteredRestaurant = listOfRestaurants.filter((res) =>
            res.data.name.toLowerCase().includes(searchText.toLowerCase())
          );

          setFilteredRestaurant(filteredRestaurant);
          }}>Search</button>
        </div>
        <button className='filter-btn' onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestraunt(filteredList);
          }}>Top Rated Restaurants</button>
      </div>  
      <div className='res-container'>
        {filteredRestaurant.map((restaurant)=>(
          <ReastrauntCard key={restaurant.data.id} resData = {restaurant}/>
        ))}
      </div>
    </div>    
    )
  }

export default Body;