import {Fragment} from 'react'

const BookmarksSidebar = ({reposCount}) => {
  return (
    <Fragment>
      <div className='text-center'> 
        <i id='bookmark-icon' className='far fa-bookmark fa-4x mt-3' ></i>
        <h1>Bookmars</h1>
        <p>You have {reposCount} bookmarks</p>
      </div>
    </Fragment>
  )
}

export default BookmarksSidebar
