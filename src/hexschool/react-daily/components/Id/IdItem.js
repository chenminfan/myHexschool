import { useState,useEffect } from "react";
import {Link,useNavigate,useParams } from "react-router-dom";
import './id.css';

const IdList = () => {
const { Id } = useParams()
const [data, setData] = useState({})
const { Name, Toldescribe, Picture1 } = data
useEffect(() => {
fetch('https://api.kcg.gov.tw/api/service/Get/9c8e1450-e833-499c-8320-29b36b7ace5c')
    .then((res) => res.json())
    .then((result) => {
    const newData = result.data.XML_Head.Infos.Info.filter((item) => item.Id === Id)
    setData({ ...newData[0] })
    })
}, [])
const navigate = useNavigate()
return (
<main>
    <div className="idPage_title">
        <h2>{Name}</h2>
        <button onClick={()=>{
            navigate("/idPage")
        }}>回列表</button>
    </div>
    <img src={Picture1} alt={Name} />
    <p>{Toldescribe}</p>
</main>
)
}
export default IdList
