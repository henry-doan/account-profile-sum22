import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Set up the initial context 
// create a context api for the user
// named ModelnameContext
export const UserContext = React.createContext()

// create a exportable consumer to access the provider
// named ModelnameConsumer 
export const UserConsumer = UserContext.Consumer

// create a provider, store items in a global scale 
// named ModelnameProvider
const UserProvider = ({ children }) => {
  // const [user, setUser] = useState({ username: '', created_at: '', lvl: '' })
  const [user, setUser] = useState({ username: 'Fooman', created_at: new Date(), lvl: 'Bronze' })

  // useEffect( () => {
  //   axios.get('/api/users')
  //   .then( res => setUser(res.data))
  //   .catch( err => console.log(err))
  // }, )

  // const updateUser = (id, user) => {
  //   axios.put(`/api/users/${id}`)
  //     .then( res => {
  //       let newUpdatedUser = users.map( u => {
  //         if (u.id === id ){
  //           return res.data
  //         }
  //         return u
  //       })
  //       setUser(newUpdatedUser)
  //     })
  //     .catch( err => console.log(err))
  // }

  const updateUser = (id, user) => {
    setUser(user)
  }

  return (
    <UserContext.Provider value={{
      user,
      updateUser,
    }}>
      { children }
    </UserContext.Provider>
  )
}

export default UserProvider;