import { UserConsumer } from "../../providers/UserProvider";
import Moment from "react-moment";

// to use what is in the value of the provider, need to use the consumer 
// this is what you would do if it is a () return 
const Account = () => (
  <UserConsumer>
    { value => 
      <>
        <h1>{value.user.username}</h1>
        <p>Date Joined: 
          <Moment format="MM/DD/YYYY">
            {value.user.created_at}
          </Moment>
        </p>
        <p>Membership Level: {value.user.lvl}</p>
      </>
    }
  </UserConsumer>
)

export default Account;