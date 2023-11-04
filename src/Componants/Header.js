import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { REMOVE } from '../redux/actions/action';


export const Header = () => {
    
    const getdata = useSelector((state)=> state.cartreducer.carts);
     console.log(getdata);

     
     const dispatch = useDispatch();
   const delet=(id)=>{
    dispatch(REMOVE(id))
    
   }
    
    
    return (
        <>
            <Navbar className='bg-dark variant-dark' style={{ height: 70 }}>
                <Container>
                    <Link to={'/'} style={{ textDecoration: 'none' }}>''
                        <h2 className='text-light' >   Shopping cart </h2>
                    </Link>
                    <Link to={'/cart'}>
                        <Badge badgeContent={getdata.length} color="primary">
                            <i class="fa-sharp fa-solid fa-cart-shopping text-light" style={{ fontSize: 30 }} ></i>
                        </Badge>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header