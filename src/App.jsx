import { useEffect,useState } from 'react';
import './App.css'
import InputForm from "./component/common/InputForm";
import Row from "./component/common/Row";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getSeatList } from "./utils/seats";

function App() {

  const [seatList,setSeatList] = useState([]);

  const fetchSeatList = ()=>{
    getSeatList().then((list)=>{
      setSeatList([...list]);
    });
  }

  useEffect(()=>{
    fetchSeatList();
  },[]);

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto my-4">
        <InputForm fetchSeatList={fetchSeatList} />
        <Row seats={seatList}/>
      </div>
    </>
  )
}

export default App
