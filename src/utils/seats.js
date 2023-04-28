import axios from 'axios';
import { toast } from 'react-toastify';

const baseUrl = "https://booking-2jum-l4h3obzj6-sumiit293.vercel.app"

async function getSeatList(){
    const url = baseUrl+"/api/booking/prepare";
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong")
    }
}

async function bookSeat(num){
    const url = baseUrl+"/api/booking";
    try {
        const res = await axios.post(url,{numOfSeat: num});
        toast.success("Booked Successfully.")
        return res.data;
    } catch (error) {
        console.log(error);
        if(error.response?.data){
            toast.error(error.response?.data?.error)
        }else{
            toast.error("Something went wrong")
        }
        
    }
}

export { getSeatList, bookSeat }