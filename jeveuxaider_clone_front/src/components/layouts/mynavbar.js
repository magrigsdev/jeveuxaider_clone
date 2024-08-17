
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
              <img src={logo_franacais} alt="Bootstrap" width="100" height="120" className="ml-2"/>

              <img src={jeveux_aider} alt="Bootstrap" width="200" height="120" className="justify-center" style={{marginLeft:"30px",margin:"0 auto"}}/>
            </a>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="true" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <div className="col d-flex justify-content-end ">
                <ul class="navbar-nav mynabar">
                    <li class="nav-item mylink">
                          <a class="me-4 fw-bold " aria-current="page" href="#" ><i class="bi bi-search"></i> Trouver une mission</a>
                  </li>
                  <li class="nav-item">
                        <span className="m-4 tiret">|</span>
                    </li>
                    <li class="nav-item mylink">
                    <a class="me-4 fw-bold" href="#" ><i class="bi bi-calendar"></i>
                      Publier une mission</a>
                  </li>
                  
                    <li class="nav-item">
                      <span class="btn btn-outline-secondary compte" href="#" >
                        <i class="bi bi-person"></i> Mon compte
                      </span>
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
