import {Fragment, useState, useEffect} from 'react'

const BookmarkIcon = (props) => {
  const [bookmarked, setBookmarked] = useState(false)

  useEffect(() => {
    const repos = JSON.parse( localStorage.getItem('bookmarks')) || {}
    const found = repos[props.repo.id]

    if(found) {
      setBookmarked(true)
    }

  }, [bookmarked, props.repo.id])

  const handleClick = () => {
    const repos = JSON.parse( localStorage.getItem('bookmarks'))

    if(bookmarked) {
      delete repos[props.repo.id]
      localStorage.setItem('bookmarks', JSON.stringify(repos))
      alert('Repository Removed')
    }
    
    else {
      if(repos) {
        repos[props.repo.id] = props.repo
        localStorage.setItem('bookmarks', JSON.stringify(repos))
      }
  
      else {
        localStorage.setItem('bookmarks', JSON.stringify({}))
        const repos = JSON.parse( localStorage.getItem('bookmarks'))
        repos[props.repo.id] = props.repo
      }
      
      alert('Repository Bookmarked')    
    }


  }
  return (
    <Fragment>
      {bookmarked && <i id='bookmark-icon' className='far fa-bookmark pr-2' style={{color: 'red'}} onClick={handleClick}></i>}
      {!bookmarked && <i id='bookmark-icon' className='far fa-bookmark pr-2' onClick={handleClick}></i>}
    </Fragment>  
  )
}

export default BookmarkIcon
