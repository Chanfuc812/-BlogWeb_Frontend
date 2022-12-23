import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import "./footer.css";


export default function Footer() {
  return (
    <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks ▶</span>
        </div>

        <div>
          <a href='https://www.facebook.com/phonelitefromUIT' className='me-4 text-reset' target='blank'>
            <MDBIcon color='secondary' fab icon='facebook-f' />
          </a>
          <a href='https://twitter.com/Chanfuc812' className='me-4 text-reset' target='blank'>
            <MDBIcon color='secondary' fab icon='twitter' />
          </a>
          <a href='https://www.instagram.com/minhtawng/' className='me-4 text-reset' target='blank'>
            <MDBIcon color='secondary' fab icon='instagram' />
          </a>
          <a href='https://www.linkedin.com/school/university-of-information-technology/' className='me-4 text-reset' target='blank'>
            <MDBIcon color='secondary' fab icon='linkedin' />
          </a>
          <a href='https://github.com/Chanfuc812' className='me-4 text-reset' target='blank'>
            <MDBIcon color='secondary' fab icon='github' />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' /> MTPlog
                
                
              </h6>
              <p>
              MTPlog belongs to the ownership of PM Entertainment Company - a large scale and long - standing "IT" company in the world.
              The company currently has a fairly modern headquarters in Vietnam. 
              
              </p>
            </MDBCol>

            

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
              <p>
                <a href='https://www.thealist.me/faqs/' className='text-reset' target='blank'>
               FAQs
                </a>
              </p>
              <p>
                <a href='https://www.facebook.com/manhahahihi' className='text-reset' target='blank'>
                Help
                </a>
              </p>
              <p>
                <a href='https://www.facebook.com/minhtang208' className='text-reset' target='blank'>
               Report
                </a>
              </p>
              <p>
                <a href='https://smartblogger.com/privacy-policy/' className='text-reset' target='blank'>
                 Privacy Policy
                </a>
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>About</h6>
              <p>
                <a href='https://www.facebook.com/chanfuccute/' className='text-reset' target='blank'>
                 Events
                </a>
              </p>
              <p>
                <a href='https://playerduo.com/chanfuc' className='text-reset' target='blank'>
                Donate
                </a>
              </p>
              <p>
                <a href='https://www.facebook.com/tu.trinh2808' className='text-reset' target='blank'>
                Careers
                </a>
              </p>
              <p>
                <a href='https://www.instagram.com/anhtu_28/' className='text-reset' target='blank'>
                More Website
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' /> 87PSG, Buenos Aires, Argentina
                
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' /> MTPlog@gmail.com
                
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 08 19 12 11
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 20 01 20 02
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      ©2022 PM Entertainment 
        <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
         
        </a>
      </div>
    </MDBFooter>
  );
}
