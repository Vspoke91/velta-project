import './ArtWork.css'
import Header from '../../components/header/Header'
import imageURLS from '../../data/ArtWorkImages'

function ArtWork() {
  const imageElement = []

  Object.values(imageURLS).forEach((img, index) => {
    imageElement[index] =
      <li
        key={index}>
        <img
          src={img}
          alt={img} />
      </li>
  })

  return (
    <div className='main'>
      <Header logoName='Velta Projects' />
      <div className='mainContent' id='artWorkPageContent'>
        <ul>
          {imageElement}
        </ul>
      </div>
    </div>
  )
}

export default ArtWork
