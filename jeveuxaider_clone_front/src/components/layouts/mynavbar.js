
import React from 'react';


 function Mynavbar()  {
     const logo_franacais = "https://www.envoludia.org/wp-content/uploads/2020/03/1200px-Republique-francaise-logo.svg_.png";
     const jeveux_aider = "https://th.bing.com/th/id/OIP.3GAtevkKMzbtvzrMDTxVKQAAAA?rs=1&pid=ImgDetMain";
     const mycolor = {
         color: 'navy',
         fontWeight: 'bold',
         margin: '20px',
         fontSize:'10pt',
         
     }
     const PersonStyle = {
         color: 'navy',
         fontWeight: 'bold',
         margin: '20px',
         border: '1px solid #ddd',
         fontSize:'10pt',
         
     }
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-white me-4">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={logo_franacais} alt="Bootstrap" width="100" height="120" />

              <img src={jeveux_aider} alt="Bootstrap" width="200" height="120" className=" justify-center" style={{marginLeft:"30px",margin:"0 auto"}}/>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className="col d-flex justify-content-end ">
                <ul class="navbar-nav ">
                        <li class="nav-item">
                    <a class="nav-link me-4 fw-bold text-primary" aria-current="page" href="#" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search " viewBox="0 0 16 16">
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                      </svg>
                      <span className='me-2'></span>Trouver une mission</a>
                        </li>
                                <li class="nav-item">
                    <a class="nav-link  me-4 fw-bold text-primary" href="#" >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar" viewBox="0 0 16 16">
                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
                          </svg> <span className='me-2'></span> Publier une mission</a>
                                </li>
                                <li class="nav-item">
                    <a class="btn btn-outline-secondary" href="#" >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
  <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
</svg><span className='me-2'></span>
                                    Mon compte
                                  </a>
                                </li>
                                
                  </ul>
              </div>
              
            </div>
          </div>
        </nav>
      </>
    )
  
}

export default Mynavbar
