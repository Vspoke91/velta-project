import './Coding.css'
import Header from '../../components/header/Header'
import SideBarNavigation from '../../components/sidebarNavigation/SideBarNavigation'
import ContentData from '../../data/CodingProjectsData'

function Coding() {
  const projectsArray = []

  for (let i = 0; i < ContentData.length; i++) {
    projectsArray.push(getNewProjectElement(ContentData[i], i))
  }

  return (
    <div className='main'>
      <Header logoName='Velta Projects' />
      <SideBarNavigation contentItems={ContentData} />

      <div className='mainContent' id='codingPageContent'>
        {projectsArray}
      </div>

    </div>
  )
}

function getNewProjectElement(data, index) {
  const tittle = data.tittle
  const description = data.description
  const skillsElements = []
  const imageElements = []

  for (let i = 0; i < data.skills.length; i++) {
    skillsElements.push(<h2 key={i}>{data.skills[i]}</h2>)
  }

  for (let i = 0; i < data.images.length; i++) {
    imageElements.push(
      <input
        key={i}
        id={'pictureInput_' + tittle + '_' + i}
        type='radio'
        name={'picture_' + tittle}
        onClick={() => setTargetPicture(data.images[i])}
        checked
      />)
  }

  function setTargetPicture(image) {
    const imgUrl = new URL('../..' + image, import.meta.url).pathname
    document.getElementById(tittle + '_Picture').src = imgUrl
    document.getElementById(tittle + '_Picture').alt = imgUrl
    document.getElementById(tittle + '_PictureBackground').style.backgroundImage = 'url(' + imgUrl + ')'
  }

  return (
    <div className='ContentItem' id={tittle} key={index}>
      <div className='TextSection'>
        <h1 className='TextSectionTittle'>{tittle}</h1>
        <p className='TextSectionDescription'>{description}</p>
        <div className='TextSectionSkills'>
          {skillsElements}
        </div>
      </div>
      <div className='PictureSection' id={tittle + '_PictureBackground'} style={{ backgroundImage: 'url(' + new URL('../..' + data.images[data.images.length - 1], import.meta.url).pathname + ')' }}>
        <div className='PictureSectionNavigation'>
          {imageElements}
        </div>
        <img id={tittle + '_Picture'} height='250px' src={new URL('../..' + data.images[data.images.length - 1], import.meta.url).pathname} alt={new URL('../..' + data.images[data.images.length - 1], import.meta.url).pathname} />
      </div>
    </div>
  )
}
export default Coding
