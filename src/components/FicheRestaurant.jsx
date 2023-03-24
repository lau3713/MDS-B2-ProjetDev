import '../styles/FicheRestaurantStyle.css'

const IMAGE_URL = 'http://localhost:1337'
function FicheRestaurant ({ restaurant }) {
  const attributes = restaurant.attributes
  let imageURL = ''
  if (attributes.image) {
    imageURL = IMAGE_URL + attributes.image.data.attributes.url
  } else {
    imageURL = 'https://via.placeholder.com/300x150'
  }
  return (

    <div className='fiche'>
      <div className='fiche-image'>
        <img src={imageURL} />
      </div>
      <div className='fiche-information'>
        <h1>{restaurant.attributes.name}</h1>
        <p>{restaurant.attributes.description}</p>
        <p>{restaurant.attributes.adresse.street}</p>
        <p>{restaurant.attributes.adresse.postcode} {attributes.city} </p>
        <p>{restaurant.attributes.adresse.email} </p>
        <p>{restaurant.attributes.adresse.phone} </p>
        <button>COMMANDER</button>
      </div>
    </div>

  )
}

export default FicheRestaurant
