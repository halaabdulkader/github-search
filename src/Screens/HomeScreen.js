import {Fragment, useState, useEffect} from 'react'
import Header from './../Base/Header'
import SearchUser from './../Search/SearchUser'

const HomeScreen = () => {
  const [user, setUser] = useState({})
  const [loading, setLoading] = useState(true)

  const handleUserChange = (user) => {
    setUser(user)
  }

  const handleLoadingChange = () => {
    setLoading(false)
  }

  return (
    <Fragment>
      <Header handleUsersChange={handleUserChange} handleLoadingChange={handleLoadingChange} />
      <SearchUser user={user} loading={loading} />
    </Fragment>
  )
}

export default HomeScreen
