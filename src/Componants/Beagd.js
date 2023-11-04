import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'react-bootstrap';
import { DEL ,ADD,REMOVE} from '../redux/actions/action';
import { Link, useNavigate } from 'react-router-dom';


export const Beagd = () => {
  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const [shoppingCart, setShoppingCart] = useState([]);
  const [price,setPrice]=useState([]);

  const total=()=>{
    let price = 0;
    getdata.map((dell,k)=>{
    price= dell.price + price
  });
  setPrice(price)
  }

  useEffect(()=>{
    total()
  },[total])
  

  useEffect(() => {
    setShoppingCart(getdata)
  }, [getdata])

  const dispatch = useDispatch();
  const del = (id) => {
    dispatch(DEL(id))
  }

  const send = (e)=>{
    //console.log(e);
     dispatch(ADD(e));
   }


   const delet=(id)=>{
    dispatch(REMOVE(id))
   }
  return (
    <div className='mt-3 '>
       {getdata.length === 0 &&
        <div className='text-center' style={{ marginTop: '7rem' }}>
      
          <h3>Your cart is empty</h3>
        </div>
      }
      <Table className='table_cart' style={{ width: '50%' }}>
        {shoppingCart?.map((ele) => {
          return (
            <tbody>
              <tr>
                <td>
                  <Link to={`/cardetails/${ele.id}`}>
                  <img src={ele.imgdata} alt='' style={{ width: '8rem', height: "7rem" }} />
                  </Link>
                </td>
                <td>
                  <p>{ele.rname}</p>
                  <p>Price : Rs.{ele.price}</p>
                  <div className='bg-light m-3' style={{ width: '6rem', color: 'dark', fontSize: '20px' }}>
                    <button className='btn' onClick={ele.qnty <=1 ? ()=>del(ele.id) : ()=>delet(ele)}>-</button>
                    <span> {ele.qnty} </span>
                    <button className='btn' onClick={()=>send(ele)}>+</button>

                  </div>
                  <p><i class="fa-solid fa-trash" style={{ fontSize: '25px' }} onClick={() => del(ele.id)}></i></p>

                </td>
              </tr>
            </tbody>
          )
        })}

      </Table>
      <strong>Total:</strong>
      <span>Rs.{price}</span>
    </div>
  )
}

export default Beagd
