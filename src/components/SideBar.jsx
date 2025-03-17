import React from 'react'

const SideBar = (props) => {

    const { handleToogleModal, data } = props;

  return (
    <div className='sidebar'>
        <div onClick={handleToogleModal} className="bgOverlay"></div>
        <div className="sidebarContents">
            <h2>{data?.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle'>{data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToogleModal}>
                <i className="fa-solid fa-right-to-bracket"></i>
            </button>
        </div>
    </div>
  )
}

export default SideBar