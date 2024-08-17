import React  from 'react'




function Banner() {
    const styleBanner = {
        margin: "15px",
        padding: "10px",
        Border: "1px solid red",
        textDecoration: "none",
        or: "black",
        
        
    }
    
    return (
        <>
            <div class="container-fluid">
                <hr className='m-2'/>
                <div class="banner">
                    <span><a href="#" > Bénevolat près de chez moi</a></span>
                    <span>
                        <a href="#" >A distance</a>
                    </span>
                    <span>
                        <a href="#" >En ce moment</a>
                    </span>
                    <span>
                        <a href="#" >Associations</a>
                    </span>
                    <span><a href="#" >Centre d'aide</a></span>
                    
                </div>
            </div>
            
            
            

        </>
    )
}
export default Banner
