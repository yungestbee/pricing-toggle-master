import { useState } from "react"
import './pricing.css'

function Pricing(){
    const [dol, setDol] = useState('$19.99')
    const [dol2, setDol2] = useState('$24.99')
    const [dol3, setDol3] = useState('$39.99')

    // const [col, setCol] = useState('$199.99')
    // const [col2, setCol2] = useState('$249.99')
    // const [col3, setCol3] = useState('$399.99')


    function handleClick(){

        if(dol === "$19.99" & dol2 ==='$24.99' & dol3 === '$39.99'){
            setDol('$199.99')
            setDol2('$249.99')
            setDol3('$399.99')
        } else{
            setDol('$19.99')
            setDol2('$24.99')
            setDol3('$39.99')
        }
    }

    // function handleDoubleClick(){
    //     setDol('$19.99')
    //     setDol2('$24.99')
    //     setDol3('$39.99')

    // }



    // const []
    return(
        <>
            <div className="container-fluid">
                <div className="head">
                    <h2>Our Pricing</h2>
                    <div className="flex">
                        <p>Annually</p>
                        <div>
                            <label className="switch" >
                                <input type="checkbox" onClick={handleClick} />
                                <span className="slider"></span>
                            </label>
                        </div> 
                        <p>Monthly</p>
                    </div>
                </div>
                    <div className="case">
                        <div className="case-item">
                            <h4>Basic</h4>
                            <h1>{dol}</h1>
                            {/* <hr /> */}
                            <p>500 GB Storage</p>
                            {/* <hr /> */}
                            <p>2 Users Allowed</p>
                            {/* <hr /> */}
                            <p>Send up to 3 GB</p>
                            {/* <hr /> */}

                            <button>LEARN MORE</button>
                        </div>
                        <div className="case-item2">
                        <h4>Professional</h4>
                            <h1>{dol2}</h1>
                            {/* <hr /> */}
                            <p>1 TB Storage</p>
                            {/* <hr /> */}
                            <p>5 Users Allowed</p>
                            {/* <hr /> */}
                            <p>Send up to 10 GB</p>
                            {/* <hr /> */}

                            <button id='btn'>LEARN MORE</button>
                        </div>
                        <div className="case-item3">
                        <h4>Master</h4>
                            <h1>{dol3}</h1>
                            {/* <hr /> */}
                            <p>2 TB Storage</p>
                            {/* <hr /> */}
                            <p>10 Users Allowed</p>
                            {/* <hr /> */}
                            <p>Send up to 20 GB</p>
                            {/* <hr /> */}

                            <button>LEARN MORE</button>
                        </div>
                    </div>
                   
            </div>
        </>
    )
}

export default Pricing