import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import Fooddata from './Fooddata'
import './style.css'
import { useDispatch } from 'react-redux';
import { ADD } from '../redux/actions/action';



export const Home = () => {
  const [data, setData] = useState(Fooddata);
  console.log(data);

  //const getdata =useSelector((state)=>state.cartreducer);
   //console.log(getdata)
    
    const dispatch = useDispatch();


    const send = (e)=>{
     //console.log(e);
      dispatch(ADD(e));
    }
  
    
  return (
    <>
      <div className='container mt-4  d-flex'>
        <div className='row justify-content-around algin-item-center itams'>
          {data.map((item, k) => {
            return (
              <>
                <Card className='m-3 card_items' style={{ width: '19rem',border:"none" }}>
                  <Card.Img variant="top" src={item.imgdata} style={{width:'300px',height:'250px'}}/>
                  <Card.Body>
                    <Card.Title>{item.rname}</Card.Title>
                    <Card.Text>
                      <p>Price: {item.price}</p>
                    </Card.Text>
                    <Button variant="primary" className='col-lg-12' onClick={()=>send(item)}>Add to cart</Button>
                  </Card.Body>
                </Card>
              </>
            )
          })}



        </div>
      </div>
    </>
  )
}

export default Home
