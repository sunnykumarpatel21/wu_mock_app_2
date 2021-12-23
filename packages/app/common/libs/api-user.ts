import axios from "axios";

export const login = async (input:{email:string,password:string}) => {
  try {
    if (input && input.email && input.email.length>0) {
      const res = await axios.post(`/api/user`,input);
      const data =res.data;
      console.log("####### Login Resposne ######## ",data)
      return data;
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

