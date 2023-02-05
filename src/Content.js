import React from 'react'
import ContentObject from './Code/ContentObject'
import './Content.css'
import './Navigation'

function Content() {
  return (
    <div className='Content'>
          <ContentObject
          Tittle = 'West Field' 
          Description = 'Hello this I made this program '
          Pictures = {['https://imageio.forbes.com/blogs-images/forbestechcouncil/files/2019/01/canva-photo-editor-8-7.jpg']}
          Languages = {['CSS', 'HTML', 'C#']}
          />

          <ContentObject
          Tittle = 'Order Tracker' 
          Description = 
          'wi wf aoiwfn oiawnfoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwofna wamodwnaofinawoinaoiwnfoi fwaoinfwi wf aoiwfn oiawnfoianwofna w'
          Pictures = {['https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg']}
          Languages = {['CSS', 'HTML', 'Java Script']}
          />
    </div>
  )
}

export default Content