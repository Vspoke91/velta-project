import './ArtWork.css'
import Header from '../../components/header/Header'


function ArtWork() {

  let images = import.meta.glob('../../images/ArtWork/*.(jpg|png|jpeg)', { eager: true, import: 'default' });

  const imageElement = []

  Object.values(images).forEach((img, index) => {
    imageElement[index] = <li key={index
    }><img src={img} alt={img} /></li>
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
