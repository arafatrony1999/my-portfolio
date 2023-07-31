import React, { useEffect, useState } from 'react'
import axios from '../../helper/Axios';
import { toast } from 'react-toastify';
import BigText from '../../components/frontend/BigText';
import { usePricingContext } from '../../context/PricingContext';
import Select from 'react-select'
import { useSearchParams } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsEnvelope, BsTwitter, BsWhatsapp } from "react-icons/bs";

const GetServicePage = () => {
    const { pricing } = usePricingContext()
    
    const [id, setId] = useSearchParams()

    useEffect(() => {
        setId(id)

        let a = pricing.filter((x) => {
            //eslint-disable-next-line
            return x.id == id.get('package_id')
        })
        setPack(a[0])
    }, [id, setId, pricing])

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [pack, setPack] = useState(null)
    const [message, setMessage] = useState('')

    const customStyle = {
        control: (provided, state) => ({
            ...provided,
            height: '50px',
            minHeight: '50px',
            margin: '10px 0'
        }),
        valueContainer: (provided, state) => ({
            ...provided,
            height: '50px',
            minHeight: '50px',
            padding: '0 15px'
        }),
        input: (provided, state) => ({
            ...provided,
            margin: '0px'
        }),
        indicatorContainer: (provided, state) => ({
            ...provided,
            height: '50px',
            minHeight: '50px',
        }),
    }

    const setSelectedPackage = (element) => {
        setPack(element)
    }
    
    const onSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        formData.append('name', name)
        formData.append('email', email)
        formData.append('phone', phone)
        formData.append('message', message)
        formData.append('package', pack ? pack.id : 0)

        axios.post('/addService', formData)
        .then((res) => {
            if(res.data === 1){
                toast.success('Your message has been recorded. Will notify you soon!', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });

                setName('')
                setEmail('')
                setPhone('')
                setPack(null)
                setMessage('')
            }
        })
        .catch((error) => {
            alert('Something went wrong!')
        })
    }

    return (
        <div className='pricing-section'>
            <BigText big='SERVICE' normal='GET A ' colored='SERVICE' />

            <div className="container skills-section">
                <div className="contact-left d-flex flex-wrap">
                    <h3>Available Packages</h3>
                    {
                        pricing.map((pricing, index) => {
                            return(
                                <div key={index} className="py-3 w-100 d-flex">
                                    <img width={50} src={pricing.icon} alt='' />
                                    <div className="contact-details">
                                        <h4>For {pricing.title}</h4>
                                        <p className='text-danger'>${pricing.off_price ? pricing.off_price : pricing.main_price} / {pricing.title}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                    <div className="social-buttons my-4">
                        <div className="products-others-right">
                            <a href="https://www.facebook.com/arafatrony1999" target='_blank' rel='noreferrer' style={{background: "#2D4373"}}><FaFacebookF /></a>
                            <a href="mailto:arafat.rony1999@gmail.com" style={{background: "#0E76E6"}}><BsEnvelope /></a>
                            <a href="https://twitter.com/ArafatRony1999" target='_blank' rel='noreferrer' style={{background: "#0087BA"}}><BsTwitter /></a>
                            <a href="https://www.linkedin.com/in/arafatrony1999/" target='_blank' rel='noreferrer' style={{background: "#005983"}}><FaLinkedinIn /></a>
                            <a href="https://api.whatsapp.com/send?phone=01879923111" target='_blank' rel='noreferrer' style={{background: "#1F7D1E"}}><BsWhatsapp /></a>
                        </div>
                    </div>
                </div>

                <div className="contact-right">
                    <form onSubmit={onSubmit} className="w-100">
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter Your Name...' />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder='Enter Your Email...' />
                        <input value={phone} onChange={(e) => setPhone(e.target.value)} type="text" placeholder='Enter Your Phone Number...' />
                        
                        <Select
                            styles={customStyle}
                            value={pack}
                            onChange={setSelectedPackage}
                            options={pricing}
                            getOptionLabel={(options) => options.title}
                            getOptionValue={(options) => options.id}
                            isSearchable
                            isClearable
                            noOptionsMessage={() => 'No package found'}
                            placeholder='Select Package...'
                            required
                        />

                        <textarea value={message} onChange={(e) => setMessage(e.target.value)} cols="30" rows="10" placeholder='Describe what you want...'>
                            {message}
                        </textarea>
                        <button type='submit' className="my-btn white-btn m-0 my-3">SEND MESSAGE</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default GetServicePage