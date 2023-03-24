const IMAGE_URL = 'http://localhost:1337'
function DishesList ({ dishes }) {
  return dishes && dishes.data && (
    <div className='list'>
      {
      dishes.data.map(dish => {
        let imageURL = ''
        if (dish.attributes) {
          imageURL = IMAGE_URL + dish.attributes.image.data.attributes.url
        } else {
          imageURL = 'https://via.placeholder.com/300x150'
        }
        return (
          <div key={dish.id} className='card'>
            <div className='card-header'>
              <img src={imageURL} />
            </div>
            <div className='card-body'>
              <h1>{dish.attributes.name}</h1>
              <p>{dish.attributes.description}</p>
              <p>{dish.attributes.price}</p>
            </div>
          </div>
        )
      })

    }

    </div>
  )
}

export default DishesList
