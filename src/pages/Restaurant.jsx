import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import DishesList from '../components/DishesList'
import FicheRestaurant from '../components/FicheRestaurant'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurants] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate[image][populate]=*&populate[dishes][populate]=*&populate[adresse][populate]=*`)
      if (response.status === 200) {
        const data = response.data.data
        setRestaurants(data)
      }
    }
    loadData()
  }, [])

  return restaurant && (
    <>
      <h1>FICHE D'UN RESTAURANT : {id} </h1>
      <FicheRestaurant restaurant={restaurant} />
      <DishesList dishes={restaurant.attributes.dishes} />

    </>

  )
}

export default Restaurant
