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
                        <div className='col-md-6'>
                            <div className='left'>
                                <div className='row '>
                                    <div className='col-6'>
                                        <a class="btn btn-primary btn-mon-espace" href="#" >
                                            <i class="bi bi-person-plus"></i> Créer mon espace Bénévole
                                        </a>
                                    </div>
                                    <div className='col-6 text-white text-2-minutes'>
                                        <span> Inscription en 2 minutes</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='right '>
                                <h1>Ils sont là.</h1>
                                <h4>Tous les acteurs du bénévolat vous attendent sur la <span>plateforme publique du bénévolat.</span> </h4>
                                <a class="btn btn-primary btn-inscrire-organisation" href="#" >
                                         Inscrire mon organisation
                                </a>
                                <div className='organisation-image'></div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <h1 style={{ textAlign: "center",fontSize:"30pt", fontWeight:"bold" }}>
                C’est votre première fois ? <br /> Suivez le guide
            </h1>
            <div className='section3 ' >
                <div className='container'>
                    <div className='row'>
                        <div className='col'>
                            <h2>Le bénévolat et plus si affinités</h2>
                            <h3>Contribuez à une cause qui vous touche au coeur </h3>
                        </div>
                        <div className='col'></div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate quaerat consequatur ea, porro rerum inventore reiciendis, quidem quod natus assumenda nobis obcaecati provident pariatur neque molestiae repellat sit autem.
                        </div>
                        <div className='col'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate quaerat consequatur ea, porro rerum inventore reiciendis, quidem quod natus assumenda nobis obcaecati provident pariatur neque molestiae repellat sit autem.
                        </div>
                        <div className='col'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis voluptate quaerat consequatur ea, porro rerum inventore reiciendis, quidem quod natus assumenda nobis obcaecati provident pariatur neque molestiae repellat sit autem.
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