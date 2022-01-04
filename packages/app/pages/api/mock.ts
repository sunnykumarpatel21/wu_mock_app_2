// Fake users data
import type { NextApiRequest, NextApiResponse } from 'next'
import { User, UserResposne } from "../../common/types/Types";
import { user, userRoles, partners } from "../../mock_data.json";
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  console.log("Request query :",req.query)
  if(req.query.action==="verifyUser"){
    let userObj: User | undefined = user.find((item) => item.email === req.body.email);
    if (userObj) {
      let roleId = userObj.role;
      let role = userRoles.find((item) => item.id == roleId);
      res.status(200).json({ ...userObj, userRole: role } )
    } else {
      res.status(404).json({ error: 'user not found' })
    }
  }else if(req.query.action==="accountInfo"){
    res.status(200).json({ users:user, partners: partners,roles:userRoles } )
  }else if(req.query.action==="getReports"){
    let userObj: User | undefined = user.find((item) => item.email === req.body.email);
    if (userObj) {
      let roleId = userObj.role;
      let role = userRoles.find((item) => item.id == roleId);
      res.status(200).json({ ...userObj, userRole: role } )
    } else {
      res.status(404).json({ error: 'user not found' })
    }
  }
}