import { useEffect, useState } from 'react';
import {
  Link
} from 'react-router-dom';
import './id.css';

const IdPage = () => {
  const [data,setData] = useState([]);
  useEffect(()=>{
    fetch("https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c")
    .then(res=>res.json())
    .then(result=>{
      const newData = result.data.XML_Head.Infos.Info
      setData(newData);
    })
  },[])
  return (
    <div className="idPage">
      <div className="idPage_head">以下列表</div>
      <div className="idPage_body">
        {data.map((item,index) =>{
        return(
          <div className="item" key={index}>
            <Link to={`/idPage/${item.Id}`}>{item.Name}</Link>
          </div>
        )
      })}
      </div>
    </div>
  );
};
export default IdPage;
