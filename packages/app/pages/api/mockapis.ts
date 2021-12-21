// Fake users data
const users = [{ id: 1 }, { id: 2 }, { id: 3 }]
import { User } from "../../common/types/Types";
import { user, userRoles } from "../../mock_data.json";
export default function handler(req:any, res:any) {
    if (req.method === 'POST') {
      //let userObj : User | undefined = user.find((item) => item.email === loginFrom.email);
  
        // Process a POST request
      } else {
        // Handle any other HTTP method
      }
  // Get data from your database
  res.status(200).json(users)
}