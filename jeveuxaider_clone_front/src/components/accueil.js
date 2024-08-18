import {useState, React } from 'react';

import Mynavbar from './layouts/mynavbar';
import Banner from './layouts/banner';

const Accueil = () => {
   const [value, setValue] = useState("hello i use state")
    return (    
        <> 
            <Mynavbar/>
            <Banner />
            <div className="section1">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-4'>
                            <a class="btn btn-primary search-btn" href="#" >
                                <i class="bi bi-search"></i> Trouver une mission de bénévolat
                            </a>
                        </div>                        
                    </div>
                </div>
            </div>

            <div className="section2">
                <div className="container">
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='left'>

                            </div>
                        </div>
                        <div className='col-md-8'>
                            <div className='right'>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            
            
        </>
    );
};

function clickme(e) {
   
    alert(e.target["myinput"].value)
}
export default Accueil;