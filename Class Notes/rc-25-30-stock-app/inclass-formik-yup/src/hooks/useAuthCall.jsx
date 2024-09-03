import axios from "axios";
import {useDispatch} from "react-redux";
import { fetchFail, fetchStart, registerSuccess } from "../features/authSlice";
import { useNavigate } from "react-router-dom";


const useAuthCall = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const register = async (userInfo) =>{

        dispatch(fetchStart(userInfo))
        

        try {

            const {data} = await axios.post("https://10002.fullstack.clarusway.com/users",userInfo);

            console.log(data);

            dispatch(registerSuccess(data))
            navigate("/stock")
            
        } catch (error) {

            dispatch(fetchFail())
            
        }
    }

    const login = async (userInfo) =>{

        dispatch(fetchStart(userInfo))

        try {

            
        } catch (error) {

            dispatch(fetchFail())
            
        }
    }

    return {register,login}
}

export default useAuthCall;