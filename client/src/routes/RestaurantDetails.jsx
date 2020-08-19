import React, { useEffect, useContext } from 'react'
import RestaurantFinder from '../api/RestaurantFinder'
import { useParams } from 'react-router-dom'
import { RestaurantContext } from '../contexts/RestaurantContext';

const RestaurantDetails = () => {

  const { id } = useParams();

  const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantContext);

  useEffect(() => {
    const fetchData = async () => {

      try{
        const response = await RestaurantFinder.get(`/${id}`);
        setSelectedRestaurant(response.data.data.restaurant);
      }catch(err){console.log(err)}
    }
    fetchData();
  }, []);

  return (
    <div>
      {selectedRestaurant && selectedRestaurant.name}
    </div>
  )
}

export default RestaurantDetails
