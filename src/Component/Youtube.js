import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

const Youtube = () => {

    const [isBright, setIsBright] = useState(true);

    const toggleBrightness = () => {
        setIsBright(!isBright);

        if (isBright) {
            document.body.style.backgroundColor = '#fff'; 
        } else {
            document.body.style.backgroundColor = '#333'; 
        }
    };

    return (
        <div className="container-fluid vh-100" style={{ padding: "15px", paddingBottom: "0px", backgroundColor: "white", borderRadius: "1rem" }}>
            {/* Header */}
            <header className="row align-items-center m-0 p-2 h-20 border-bottom">
                <div className="col-2 d-flex align-items-center">
                    {/* Logo */}
                    <h4 style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 500,
                        fontSize: '25px',
                        lineHeight: '37.5px'
                    }}>
                        Analyse Me
                    </h4>
                </div>
                <div className="col-8">
                    {/* Search Box */}
                    <div className="position-relative">
                        <input
                            type="text"
                            className="form-control rounded-3"
                            placeholder="Search"
                            style={{ padding: "10px", paddingLeft: "30px" }} // Add padding for icons
                        />
                        <span
                            className="position-absolute"
                            style={{ left: '10px', top: '50%', transform: 'translateY(-50%)' }}
                        >
                            <i className="fa-solid fa-search"></i>
                        </span>
                        <span
                            className="position-absolute"
                            style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}
                        >
                            <i className="fa-solid fa-sliders"></i>
                        </span>
                    </div>
                </div>
                <div className="col-2 d-flex justify-content-end">
                    {/* Brightness Icon */}
                    <button className="btn btn-light" onClick={toggleBrightness}>
                        <i className="fa-solid fa-sun"></i>
                    </button>
                </div>
            </header>

            {/* Sidebar and Content */}
            <div className="row d-flex mt-0">
                {/* Sidebar */}
                <div className="p-3" style={{ width: '80px', boxShadow: '0px -2px 4px rgba(0, 0, 0, 0.1)' }}>
                    <div className="d-flex flex-column align-items-center">
                        <button className="btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'grey', fontSize: '20px', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <i className="fa-solid fa-home"></i>
                        </button>
                        <button className="btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'grey', fontSize: '20px', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                            <i className="fa-solid fa-chart-bar"></i>
                        </button>
                    </div>
                    <div className="d-flex flex-column align-items-center" style={{ marginTop: "290px" }}>
                        <button className="btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'grey', fontSize: '20px', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <i className="fa-solid fa-cog"></i>
                        </button>
                        <button className="btn" style={{ backgroundColor: 'transparent', border: 'none', color: 'grey', fontSize: '20px', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                            <i className="fa-solid fa-user"></i>
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="p-4" style={{ width: 'calc(100% - 80px)', padding: '20px' }}>
                    <h2 style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '35px',
                        lineHeight: '52.5px'
                    }}>
                        Youtube
                    </h2>
                    <hr style={{ width: "40%" }} />
                    <div className='row mt-2'>
                        <div className='col-12'>
                            <pre style={{
                                whiteSpace: 'pre-wrap',
                                wordWrap: 'break-word',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 300,
                                fontSize: '18px',
                                lineHeight: '30px'
                            }}>
                                Elon Musk, born on June 28, 1971, in Pretoria, South Africa, is a billionaire entrepreneur, inventor, and engineer. He displayed an early talent for technology and business, programming his first video game at the age of 12. In 1989, Musk moved to Canada and later attended the University of Pennsylvania in the U.S., earning degrees in physics and economics.

                                Musk co-founded Zip2, a software company, which was sold for nearly $300 million in 1999. He then started X.com, which became PayPal and was sold to eBay for $1.5 billion in 2002. With his fortune, Musk founded SpaceX in 2002, aiming to make space travel affordable. In 2004, he joined Tesla Motors (now Tesla, Inc.), where he played a key role in turning it into a global leader in electric vehicles.
                            </pre>

                            <div className='row'>
                                <div className='col-md-2'>
                                    <button style={{ width: '100%', backgroundColor: '#007bff', color: 'white', borderRadius: "8px", border: "none" }}>Images</button>
                                </div>
                                <div className='col-md-2'>
                                    <button style={{ width: '100%', borderRadius: "8px", border: "none" }}>Videos</button>
                                </div>
                            </div>
                            <hr style={{ width: "50%" }} />
                            <div className='row'>
                                <div className='col-md-2'>
                                    <button style={{ width: '100%', backgroundColor: '#007bff', color: 'white', borderRadius: "8px", border: "none" }}>Professional</button>
                                </div>
                                <div className='col-md-2'>
                                    <button style={{ width: '100%', borderRadius: "8px", border: "none" }}>Comedy</button>
                                </div>
                                <div className='col-md-2'>
                                    <button style={{ width: '100%', borderRadius: "8px", border: "none" }}>18+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Youtube;
