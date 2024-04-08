import React from 'react'
import Card from './components/Card'
import img1 from './assets/IPhone_X.png'
import img2 from './assets/samsung.jpeg'
import img3 from './assets/Pixel8.png'
import img4 from './assets/Vivo.jpeg'
import img5 from './assets/Oneplus9.png'
import Navbar from './components/Navbar'

const App = () => {
  const cardDatas = [
    {id: 1 , img : img1 , title : "Iphone X" , description : "An apple phone which is nothing like apple" , price : "$899"  },
    {id: 2 , img : img2 , title : "Samsung Galaxy" , description : "Samsung's new variant which goes beyond Galaxy to the Universe" , price : "$649"  },
    {id: 3 , img : img3 , title : "Google Pixel 8" , description : "Google's new launch with all AI features included" , price : "$799"  },
    {id: 4 , img : img4 , title : "Vivo F9" , description : "Samsung's new variant which goes beyond Galaxy to the Universe" , price : "$449" },
    {id: 5 , img : img5 , title : "One Plus 9" , description : "The all new One plus 9 with fast charging" , price : "$449" }
  ]
  return (
    <div>
      <Navbar/>
        <div className="container">
          <div className="row">
          {cardDatas.map(data => (
            <div className='col-sm-12 col-md-6 col-lg-4 col-xl-4 justify-content-center margin' key={data.id}>
              <Card
              {...data}
              />
            </div>
          ))}
          </div>
        </div>
    </div>
  )
}

export default App