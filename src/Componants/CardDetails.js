import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import { useSelector ,useDispatch} from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { DEL } from '../redux/actions/action';

export const CardDetails = () => {
  const [group, setGroup] = useState([])

  const getdata = useSelector((state) => state.cartreducer.carts);
  console.log(getdata);

  const { id } = useParams();

  const compear =()=> {
    let compeardata = getdata.filter((data) => {
      return data.id == id
    })
    setGroup(compeardata);
  }

  useState(() => {
    compear();
  }, [id])

  const history = useNavigate();

  const dispatch = useDispatch();
  const del = (id) => {
    dispatch(DEL(id))
    history('/')
  }



  return (
    <div className='card align-item-center card_items ' style={{ width: "600px" }}>
      
          {group.map((grp, k) => {
            return (
              <Table>
              <tbody>
                <tr>
                  <td>
                    <img src={grp.imgdata}
                      style={{ width: '18rem' }} />
                  </td>
                  <td>
                    <p>Name:{grp.rname}</p>
                    <p>Address:{grp.address}</p>
                    <p><i class="fa-solid fa-trash" 
                    onClick={()=>del(grp.id)}
                    style={{fontSize:'25px',color:"red"}}></i></p>
                  </td>
                </tr>
              </tbody>
              </Table>
            )
          })}
      
    </div>
  )
}

export default CardDetails
