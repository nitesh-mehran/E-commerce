import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center text-white' style={{ backgroundColor: '#1E3A8A' }}>
      <MDBContainer className='pt-4'>
        <section className='mb-4'>
          <MDBBtn
            rippleColor="white"
            color='link'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fab fa-facebook-f' />
          </MDBBtn>

          <MDBBtn
            rippleColor="white"
            color='link'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-twitter' />
          </MDBBtn>

          <MDBBtn
            rippleColor="white"
            color='link'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-google' />
          </MDBBtn>

          <MDBBtn
            rippleColor="white"
            color='link'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-instagram' />
          </MDBBtn>

          <MDBBtn
            rippleColor="white"
            color='link'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-linkedin' />
          </MDBBtn>

          <MDBBtn
            rippleColor="white"
            color='link'
            floating
            size="lg"
            className='text-white m-1'
            href='#!'
            role='button'
          >
            <MDBIcon fab className='fa-github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center text-white p-3' style={{ backgroundColor: '#172554' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          Niteshkumar.com
        </a>
      </div>
    </MDBFooter>
  );
}