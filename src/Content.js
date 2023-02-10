import React from 'react'
import ContentObject from './ContentObject'
import './Content.css'

function Content({contentItems}) {

  let contentElements = new Array(contentItems.length);

  for(let i = 0; i < contentItems.length; i++){
    contentElements[i] = <ContentObject
    Tittle = {contentItems[i].tittle} 
    Description = {contentItems[i].description}
    Pictures = {contentItems[i].images}
    Skills = {contentItems[i].skills}
    />;
  }

  return (
    <div className='Content'>
         {contentElements}
    </div>
  )
}

export default Content