import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const ManagerLanding = () => {

    const [isBright, setIsBright] = useState(true);

    const toggleBrightness = () => {
        setIsBright(!isBright);

        // Apply bright or dark theme styles (you can extend this to change the entire app's theme)
        if (isBright) {
            document.body.style.backgroundColor = '#fff'; // Bright mode
        } else {
            document.body.style.backgroundColor = '#333'; // Dark mode
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
                <div className="p-4" style={{ width: 'calc(100% - 80px)', padding: '10px' }}>
                    <h2 style={{
                        fontFamily: 'Poppins, sans-serif',
                        fontWeight: 700,
                        fontSize: '35px',
                        lineHeight: '52.5px'
                    }}>
                        Manager
                    </h2>
                    <hr style={{ width: "40%" }} />
                    <div className='row mt-2'>
                        <p className='fw-bold' style={{ fontFamily: 'Poppins, sans-serif' }}>M -001</p>
                        <p style={{ fontFamily: 'Poppins, sans-serif' }}>Unable to Download pretrained weights from the internet</p>
                        <hr style={{ width: "40%" }} />
                    </div>

                    {/* card */}
                    <div className="row">
                        <div className="card col-8 p-2" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-2">
                                    <h6 style={{ fontFamily: 'Poppins, sans-serif' }}>M-001</h6>
                                </div>
                                <div className="col-6">
                                    <p className="m-0" style={{ fontFamily: 'Poppins, sans-serif' }}>Unable to Download pretrained weights from the internet</p>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <span className="position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                        <i className="fa-solid fa-sliders"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Other Cards */}
                    <div className="row mt-2">
                        <div className="card col-8 p-2" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-2">
                                    <h6 style={{ fontFamily: 'Poppins, sans-serif' }}>M-002</h6>
                                </div>
                                <div className="col-6">
                                    <p className="m-0" style={{ fontFamily: 'Poppins, sans-serif' }}>Unable to Download pretrained weights from the internet</p>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <span className="position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                        <i className="fa-solid fa-sliders"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-2">
                        <div className="card col-8 p-2" style={{ boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.3)' }}>
                            <div className="row align-items-center justify-content-center">
                                <div className="col-2">
                                    <h6 style={{ fontFamily: 'Poppins, sans-serif' }}>M-003</h6>
                                </div>
                                <div className="col-6">
                                    <p className="m-0" style={{ fontFamily: 'Poppins, sans-serif' }}>Unable to Download pretrained weights from the internet</p>
                                </div>
                                <div className="col-2"></div>
                                <div className="col-2">
                                    <span className="position-absolute" style={{ right: '10px', top: '50%', transform: 'translateY(-50%)' }}>
                                        <i className="fa-solid fa-sliders"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManagerLanding;
