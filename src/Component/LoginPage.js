import React from 'react';
import { useState } from 'react'
import '../Assets/LoginPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {

    const navigate = useNavigate();

    const [activeTab, setActiveTab] = useState('member');
    const [activeStep, setActiveStep] = React.useState(0);

    const steps = ['', '', ''];

    // step 1 in signup form
    const [fullname, setFullName] = useState("Elon Musk");
    const [dateOfBirth, setDateOfBirth] = useState("11-Apr-1978");
    const [age, setAge] = useState("52");
    const [maritalStatus, setMaritalStatus] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("9750149055");
    const [emailId, setEmailId] = useState("elonmusk04@gmail.com");
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [twitterLink, setTwitterLink] = useState("x.com/madan3");
    const [facebookLink, setFacebookLink] = useState("facebook.com/madangowriofficial");
    const [instagramLink, setInstagramLink] = useState("instagram.com/madangowri/");
    const [linkedinLink, setLinkedinLink] = useState("linkedin.com/in/madangowri/");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [otp, setOtp] = useState("");


    const totalSteps = () => {
        return steps.length;
    };

    const isLastStep = () => {
        return activeStep === totalSteps() - 1;
    };

    const handleNext = () => {
        const newActiveStep = isLastStep()
            ? activeStep
            : activeStep + 1;
        setActiveStep(newActiveStep);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/dashboard'); 
    };

    return (
        <div className="row rowing d-flex vh-100" style={{ margin: '0', borderRadius: "1rem", backgroundColor: "white" }}>
            {/* Left column */}
            <div className="row rowing col-md-6 d-flex">
                <div className='col-md-12'>
                    <h1 className="loginPageTitle">Analyze Me</h1>
                </div>
                <div className=' col-md-12'>
                    <p className='loginPageSubTitle'>Welcome back to learn and collaborate,
                        with peoples...</p>
                </div>
            </div>

            {/* Right column with login forms */}

            <div className="col-md-6 d-flex align-items-center justify-content-center" style={{ padding: '20px' }}>
                <div style={{ height: "90%", width: '90%', padding: '20px' }}>
                    {/* Pills navs */}
                    <div className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist" style={{
                        display: 'flex',
                        justifyContent: 'center',
                        margin: '0 auto',
                        width: "321px",
                        backgroundColor: '#e9ecef',
                        borderRadius: '50px',
                    }}>
                        <div style={{
                            display: 'flex',
                            height: '41px',
                            margin: '0 auto',
                            width: '100%',
                            overflow: 'hidden',
                            border: '1px solid #ccc',
                            borderRadius: '50px',
                            backgroundColor: '#e9ecef',
                        }}>
                            <button
                                className={`nav-link ${activeTab === 'member' ? 'active' : ''}`}
                                id="tab-login"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-login"
                                role="tab"
                                aria-controls="pills-login"
                                aria-selected={activeTab === 'member'}
                                onClick={() => setActiveTab('member')}
                                style={{
                                    flex: 1,
                                    height: '41px',
                                    border: 'none',
                                    borderRight: '1px solid #ccc',
                                    padding: '0 16px',
                                    textTransform: 'none',
                                    margin: 0,
                                    backgroundColor: activeTab === 'member' ? '#007bff' : '#e9ecef',
                                    color: activeTab === 'member' ? 'white' : 'black',
                                    borderRadius: activeTab === 'member' ? '50px' : '0px',
                                    transition: 'background-color 0.3s ease',
                                }}
                            >
                                Member
                            </button>
                            <button
                                className={`nav-link ${activeTab === 'nonMember' ? 'active' : ''}`}
                                id="tab-register"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-register"
                                role="tab"
                                aria-controls="pills-register"
                                aria-selected={activeTab === 'nonMember'}
                                onClick={() => setActiveTab('nonMember')}
                                style={{
                                    flex: 1,
                                    height: '41px',
                                    border: 'none',
                                    padding: '0 16px',
                                    textTransform: 'none',
                                    margin: 0,
                                    backgroundColor: activeTab === 'nonMember' ? '#007bff' : '#e9ecef',
                                    borderRadius: activeTab === 'nonMember' ? '50px' : '0px',
                                    transition: 'background-color 0.3s ease',
                                }}
                            >
                                Not a Member
                            </button>
                        </div>
                    </div>

                    <div className="tab-content">
                        {/* Login form */}
                        <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login" style={{ marginTop: "60px" }}>
                            <form onSubmit={handleSubmit}>
                                {/* Email input */}
                                <div className="row rowing mb-4">
                                    <div className="col-md-6 mb-3 mb-md-0">
                                        <label className="form-label" htmlFor="loginName" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                            Email or username
                                        </label>
                                        <div className="position-relative">
                                            <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', opacity: 0.8 }} />
                                            <input
                                                type="email"
                                                id="loginName"
                                                placeholder='Type here'
                                                className="form-control rounded-pill"
                                                style={{
                                                    borderRadius: '9px',
                                                    height: "50px",
                                                    padding: "16px 24px 16px 40px",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="form-label" htmlFor="loginPassword" style={{ fontWeight: 'bold', fontSize: '16px' }}>
                                            Password
                                        </label>
                                        <div className="position-relative">
                                            <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', opacity: 0.8 }} />
                                            <input
                                                type={passwordVisible ? 'text' : 'password'}
                                                id="loginPassword"
                                                placeholder='*******'
                                                className="form-control rounded-pill"
                                                style={{
                                                    borderRadius: '9px',
                                                    height: "50px",
                                                    padding: "16px 24px 16px 40px",
                                                }}
                                            />
                                            <FontAwesomeIcon
                                                icon={passwordVisible ? faEyeSlash : faEye}
                                                onClick={() => setPasswordVisible(!passwordVisible)}
                                                style={{
                                                    position: 'absolute',
                                                    right: '15px',
                                                    top: '50%',
                                                    transform: 'translateY(-50%)',
                                                    cursor: 'pointer',
                                                    color: '#6c757d',
                                                    opacity: 0.8,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row rowing mb-4 d-flex align-items-center justify-content-between">
                                    <div className="col-auto d-flex align-items-center">
                                        <input className="form-check-input" type="checkbox" value="" id="loginCheck" defaultChecked />
                                        <label className="form-check-label ms-2 mb-0" htmlFor="loginCheck" style={{ color: '#6c757d', opacity: 0.8 }}> Remember me </label>
                                    </div>
                                    <div className="col-auto">
                                        <p className="text-end password mb-0">Forgot password?</p>
                                    </div>
                                </div>

                                {/* Submit button */}
                                <div className="text-end">
                                    <button type="submit" className="sign-btn mb-4">Sign in</button>
                                </div>
                            </form>
                        </div>

                        {/* Right column with signup forms */}
                        {/* Not a Member */}
                        <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register" style={{ marginTop: "10px", padding: '20px', borderRadius: '20px', overflow: 'hidden' }}>
                            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                <Stepper nonLinear activeStep={activeStep} sx={{ width: '50%' }}>
                                    {steps.map((label, index) => (
                                        <Step key={label}>
                                            <StepButton color="inherit">{label}</StepButton>
                                        </Step>
                                    ))}
                                </Stepper>

                                {/* Step 1 Form Inputs */}
                                {activeStep === 0 && (
                                    <form className="mt-4" style={{ width: '100%' }}>
                                        {/* Full Name and Date of Birth in one row rowing */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-8 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="fullname" style={{ whiteSpace: 'nowrap' }}>Full Name</label>
                                                <input
                                                    type="text"
                                                    id="fullname"
                                                    value={fullname}
                                                    onChange={(e) => setFullName(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>

                                            <div className="col-md-4 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="age" style={{ whiteSpace: 'nowrap' }}>Age</label>
                                                <input
                                                    type="number"
                                                    id="age"
                                                    value={age}
                                                    onChange={(e) => setAge(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>
                                        </div>

                                        {/* Age and Marital Status in one row rowing */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-6 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="dateOfBirth" style={{ whiteSpace: 'nowrap' }}>Date of Birth</label>
                                                <input
                                                    type="date"
                                                    id="dateOfBirth"
                                                    value={dateOfBirth}
                                                    onChange={(e) => setDateOfBirth(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>
                                            <div className="col-md-6 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="maritalStatus" style={{ whiteSpace: 'nowrap' }}>Marital Status</label>
                                                <select
                                                    id="maritalStatus"
                                                    value={maritalStatus}
                                                    onChange={(e) => setMaritalStatus(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                >
                                                    <option value="single">Single</option>
                                                    <option value="married">Married</option>
                                                </select>
                                            </div>
                                        </div>

                                        {/* Phone Number and Email ID in one row rowing */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-5 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="phoneNumber" style={{ whiteSpace: 'nowrap' }}>Mobile</label>
                                                <input
                                                    type="text"
                                                    id="phoneNumber"
                                                    value={phoneNumber}
                                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>

                                            <div className="col-md-7 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="emailId" style={{ whiteSpace: 'nowrap' }}>Email ID</label>
                                                <input
                                                    type="email"
                                                    id="emailId"
                                                    value={emailId}
                                                    onChange={(e) => setEmailId(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* Step 2 Form Inputs */}
                                {activeStep === 1 && (
                                    <form className="mt-4" style={{ width: '100%' }}>
                                        {/* Twitter Link */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-12 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="twitterLink" style={{ whiteSpace: 'nowrap' }}>Twitter/X  Link</label>
                                                <input
                                                    type="text"
                                                    id="twitterLink"
                                                    value={twitterLink}
                                                    onChange={(e) => setTwitterLink(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>
                                        </div>

                                        {/* YouTube Link */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-12 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="youtubeLink" style={{ whiteSpace: 'nowrap' }}>Facebook Link</label>
                                                <input
                                                    type="text"
                                                    id="youtubeLink"
                                                    value={facebookLink}
                                                    onChange={(e) => setFacebookLink(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>
                                        </div>

                                        {/* Instagram Link */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-12 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="instagramLink" style={{ whiteSpace: 'nowrap' }}>Instagram Link</label>
                                                <input
                                                    type="text"
                                                    id="instagramLink"
                                                    value={instagramLink}
                                                    onChange={(e) => setInstagramLink(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>
                                        </div>

                                        {/* LinkedIn Link */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-12 d-flex align-items-center">
                                                <label className="form-label me-2 mt-1" htmlFor="linkedinLink" style={{ whiteSpace: 'nowrap' }}>Linked-in Link</label>
                                                <input
                                                    type="text"
                                                    id="linkedinLink"
                                                    value={linkedinLink}
                                                    onChange={(e) => setLinkedinLink(e.target.value)}
                                                    className="form-control flex-grow-1"
                                                    style={{ borderRadius: '9px' }}
                                                />
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* Step 3 Form Inputs */}
                                {activeStep === 2 && (
                                    <form className="mt-4" style={{ width: '100%' }}>
                                        {/* Email and Username in one row rowing */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="email">Email Id</label>
                                                    <div className="position-relative">
                                                        <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', opacity: 0.8 }} />
                                                        <input
                                                            type="email"
                                                            id="loginName"
                                                            value={email}
                                                            onChange={(e) => setEmail(e.target.value)}
                                                            placeholder='Type here'
                                                            className="form-control rounded-pill"
                                                            style={{
                                                                borderRadius: '9px',
                                                                height: "40px",
                                                                padding: "16px 24px 16px 40px",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="userName">Username</label>
                                                    <div className="position-relative">
                                                        <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', opacity: 0.8 }} />
                                                        <input
                                                            type="text"
                                                            id="loginName"
                                                            value={userName}
                                                            onChange={(e) => setUserName(e.target.value)}
                                                            placeholder='Type here'
                                                            className="form-control rounded-pill"
                                                            style={{
                                                                borderRadius: '9px',
                                                                height: "40px",
                                                                padding: "16px 24px 16px 40px",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Password and OTP in one row rowing */}
                                        <div className="row rowing mb-3">
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="password">Password</label>
                                                    <div className="position-relative">
                                                        <FontAwesomeIcon icon={faLock} style={{ position: 'absolute', left: '15px', top: '50%', transform: 'translateY(-50%)', color: '#6c757d', opacity: 0.8 }} />
                                                        <input
                                                            type={passwordVisible ? 'text' : 'password'}
                                                            id="loginPassword"
                                                            placeholder='*******'
                                                            value={password}
                                                            onChange={(e) => setPassword(e.target.value)}
                                                            className="form-control rounded-pill"
                                                            style={{
                                                                borderRadius: '9px',
                                                                height: "40px",
                                                                padding: "16px 24px 16px 40px",
                                                            }}
                                                        />
                                                        <FontAwesomeIcon
                                                            icon={passwordVisible ? faEyeSlash : faEye}
                                                            onClick={() => setPasswordVisible(!passwordVisible)}
                                                            style={{
                                                                position: 'absolute',
                                                                right: '15px',
                                                                top: '50%',
                                                                transform: 'translateY(-50%)',
                                                                cursor: 'pointer',
                                                                color: '#6c757d',
                                                                opacity: 0.8,
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label className="form-label" htmlFor="otp">OTP</label>
                                                    <div className="position-relative">
                                                        <input
                                                            type="text"
                                                            id="loginName"
                                                            value={otp}
                                                            onChange={(e) => setOtp(e.target.value)}
                                                            placeholder='Type here'
                                                            className="form-control rounded-pill"
                                                            style={{
                                                                borderRadius: '9px',
                                                                height: "40px",
                                                                padding: "16px 24px 16px 40px",
                                                            }}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                )}

                                {/* Step navigation buttons */}
                                <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                    <Box sx={{ pt: 2 }}>
                                        <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
                                            <Box sx={{ pt: 2 }}>
                                                {/* Conditionally render "Next" or "Sign Up" based on the activeStep */}
                                                {activeStep < steps.length - 1 ? (
                                                    <Button className="next-btn" onClick={handleNext} sx={{ mr: 1 }}>
                                                        Next
                                                    </Button>
                                                ) : (
                                                    <Button className="next-btn" sx={{ mr: 1 }}>
                                                        Sign Up
                                                    </Button>
                                                )}
                                            </Box>
                                        </div>
                                    </Box>
                                </div>
                            </Box>
                        </div>

                        {/* Register buttons */}
                        <div className="text-center">
                            <p className="sign-in-text mt-2">Or sign in with username and password</p>
                        </div>
                        <div className="text-center col-12">
                            <button type="button" className="sign-btn mb-4" style={{ width: '100%' }}>
                                <FontAwesomeIcon icon={faGoogle} style={{ marginRight: '8px' }} />
                                Sign in with Google Account
                            </button>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default LoginPage;
