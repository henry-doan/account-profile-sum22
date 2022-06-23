import { useState } from 'react';
import { UserConsumer } from '../../providers/UserProvider';

// if you have a { return } then you have to do this below
const AccountForm = ({ updateUser }) => {
  const [user, setUser] = useState({ username: '' , lvl: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    updateUser(1, user)
    setUser({ username: '' , lvl: '' })
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>New username</label>
        <input
          name='username'
          value={user.username}
          onChange={(e) => setUser({...user, username: e.target.value })}
          required
        />
        <select
          name='lvl'
          value={user.lvl}
          onChange={(e) => setUser({...user, lvl: e.target.value })}
          required
        >
          <option value='Bronze'>Bronze</option>
          <option value='Silver'>Silver</option>
          <option value='Gold'>Gold</option>
          <option value='Platinum'>Platinum</option>
        </select>
        <button type='submit'>
          Submit
        </button>
      </form>
    </>
  )
}

// create a component that can wrap the form
const ConnectedAccountForm = (props) => (
  <UserConsumer>
    { value => <AccountForm {...props} {...value} />}
  </UserConsumer>
)

export default ConnectedAccountForm;