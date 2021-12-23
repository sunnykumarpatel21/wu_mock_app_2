import { NextApiRequest, NextApiResponse } from "next";
import NextCors from "nextjs-cors";
import { Role, User, UserResposne } from "../../../common/types/Types";
import { user, userRoles } from "../../../mock_data.json";
export default async (req: NextApiRequest, res: NextApiResponse) => {
  await NextCors(req, res, {
    methods: ["GET", "POST"],
    origin: "*",
    optionsSuccessStatus: 200,
  });
  const { email, password} = req.body as { email: string,password:string };
  try {
    let userObj: User | undefined = user.find((item) => item.email === email);
    let response:UserResposne;
    if(userObj){
      response= {
        id:userObj.id,
        email:userObj.email,
        firstName:userObj.firstName,
        lastName:userObj.lastName
      } ;
      let role: Role | undefined = userRoles.find((item) => item.id === userObj?.role);
      console.log("request role :",role, userRoles)
      response.role =role;
      res.status(200).json(response)
    }else{
      res.status(401).json({ error: "User not found" });
    }
  } catch (e) {
    res.status(400).json({ error: (e as Error).message });
  }
};