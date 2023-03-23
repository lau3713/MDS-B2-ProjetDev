import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import FicheRestaurant from '../components/FicheRestaurant'

function Restaurant () {
  const { id } = useParams()
  const [restaurant, setRestaurants] = useState()

  useEffect(() => {
    const loadData = async () => {
      const response = await axios.get(`http://localhost:1337/api/restaurants/${id}?populate=*`)
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
      {/* <pre>{JSON.stringify(restaurant, null, 2)}</pre> */}
      <FicheRestaurant restaurant={restaurant} />
    </>

  )
}

export default Restaurant
