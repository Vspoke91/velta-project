import './Coding.css'
import Header from '../../components/header/Header'
import SideBarNavigation from '../../components/sidebarNavigation/SideBarNavigation'
import ContentData from '../../data/CodingProjectsData'

function Coding() {
  const contentElements = new Array(ContentData.length)

  for (let i = 0; i < ContentData.length; i++) {
    contentElements[i] = createContentElement(ContentData[i])
  }

  return (
    <div className='main'>
      <Header logoName='Velta Projects' />
      <SideBarNavigation contentItems={ContentData} />
      <div className='mainContent' id='codingPageContent'>
        {contentElements}
      </div>
    </div>
  )
}

function createContentElement(data) {
  const Tittle = data.tittle
  const Description = data.description

  const SkillsElements = new Array(data.skills.length)

  for (let i = 0; i < data.skills.length; i++) {
    SkillsElements[i] = <h2>{data.skills[i]}</h2>
  }

  const ImageElements = new Array(data.images.length)

  for (let i = 0; i < data.images.length; i++) {
    ImageElements[i] = <input id={'pictureInput_' + Tittle + '_' + i} type='radio' name={'picture_' + Tittle} onClick={() => setTargetPicture(data.images[i])} checked />
  }

  function setTargetPicture(image) {
    const imgUrl = new URL('../..' + image, import.meta.url).pathname
    document.getElementById(Tittle + '_Picture').src = imgUrl
    document.getElementById(Tittle + '_Picture').alt = imgUrl
    document.getElementById(Tittle + '_PictureBackground').style.backgroundImage = 'url(' + imgUrl + ')'
  }

  return (
    <div className='ContentItem' id={Tittle}>
      <div className='TextSection'>
        <h1 className='TextSectionTittle'>{Tittle}</h1>
        <p className='TextSectionDescription'>{Description}</p>
        <div className='TextSectionSkills'>
          {SkillsElements}
        </div>
      </div>
      <div className='PictureSection' id={Tittle + '_PictureBackground'} style={{ backgroundImage: 'url(' + data.images[data.images.length - 1] + ')' }}>
        <div className='PictureSectionNavigation'>
          {ImageElements}
        </div>
        <img id={Tittle + '_Picture'} height='250px' src={data.images[data.images.length - 1]} alt={data.images[data.images.length - 1]} />
      </div>
    </div>
  )
}
export default Coding
