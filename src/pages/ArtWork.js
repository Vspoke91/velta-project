import React from 'react'
import '../styles/ArtWork.css'
import Header from '../components/Header';

const images = importAll(require.context('/public/images/ArtWork/', false, /\.(png|jpe?g|svg)$/));

function importAll(r) {
  let images = [];
  r.keys().forEach((item, index) => { images[index] = r(item); });
  return images
}

function ArtWork() {

  let imageElement = []

  Object.values(images).forEach((img, index) => {imageElement[index] = <li><img src={img} alt = {img}/></li>});

  return (
  
    <div className='main'>
      <Header logo_Name={'Velta Projects'}/>
      <div className='mainContent'>
        <ul>
          {imageElement}
        </ul>
      </div>
    </div>
  )
}

export default ArtWork