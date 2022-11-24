import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import HTMLViewer from '../../components/HTMLViewer/HTMLViewer'
import Input from '../../components/Input/Input'
import MultiSelectDropDown from '../../components/MultiSelectDropDown/MultiSelectDropDown'
import PageLoader from '../../components/PageLoader/PageLoader'
// import { insured_details } from '../../data/mockdata'
import Styles from './Create.module.scss'
const Create = (props)=>{
    const [partnerName, setPartnerName] = useState('')
    const [partnerAddress,setPartnerAddress] = useState('')
    const [templateName,setTemplateName] = useState('')
    const [policyDetails,setPolicyDetails] = useState([])
    const [policyDetailsAllocated,setPolicyDetailsAllocated] = useState([])
    const [htmlContent, setHtmlContent] = useState('')
    const [loading,setLoading] = useState({
        template_details:false,
        partner_detail:false,
        page:false
    })
    const fetchAttributes = async ()=>{
        try{
            setLoading((prevState)=>(
                {
                    ...prevState,
                    page:true
                }
            ))
            const {data} = await axios.get('http://localhost:8080/getAttributesForLob/loan')
            setPolicyDetails(data)
        }catch(err){
            console.log(err)
        }finally{
            setLoading((prevState)=>(
                {
                    ...prevState,
                    page:false
                }
            ))
        }
    }
    useEffect(()=>{
        fetchAttributes()
    },[])

    const getPartnerName = (value)=>{
        setPartnerName(value)
    }

    const getPartnerAddress =(value)=>{
        setPartnerAddress(value)
    }

    const getTemplateName = (value)=>{
        setTemplateName(value)
    }

    const getPolicyDetailsAllocated = (data)=>{
        console.log(data)
        setPolicyDetailsAllocated([...data])
    }

    const onClickPartnerDetailHandler =async()=>{
        try{
            setLoading((prevState)=>({
                ...prevState,
                partner_detail:true
            }))
            const {data}=await axios.post("http://localhost:8080/generateHeader",{
                "partner_details":{
                    "partner_name":partnerName,
                    "partner_address":partnerAddress,
                },
                "lob":"loan"
            })
            setHtmlContent(data)
        }catch(err){
            console.log(err)
        }finally{
            setLoading((prevState)=>({
                ...prevState,
                partner_detail:false
            }))
        }
        
    }

    const onClickSendTemplateName=async()=>{
        try{
            setLoading((loading)=>(
                {...loading,
                template_details:true}
            ))
            const {data} = await axios.post('http://localhost:8080/generateHeader',{
                "template_name":templateName,
                "lob":"loan"
            })
            setHtmlContent(data)
        }catch(err){
            console.log(err)
        }finally{
            setLoading((loading)=>(
                {...loading,
                template_details:false}
            ))
        }
    }

    const onClickHandler=()=>{
        console.log("Clicked")
    }

    if(policyDetails.length===0||loading.page){
        return(
            <div className={Styles.create}>
                <PageLoader/>
            </div>
        )
    }

    console.log(policyDetails)
    
    return(
        <div className={Styles.create}>
            <div className={Styles.create_left}>
                <div className={Styles.form}>
                    <div className={Styles.formControl}>
                        <Input
                            type='text'
                            value={templateName}
                            onChange={getTemplateName}
                            text="Template Name"
                        />
                        <div className={Styles.row}>
                            <Button loading={loading.template_details} onClick={onClickSendTemplateName}>Next</Button>
                        </div>
                            <Input
                                type='text'
                                value={partnerName}
                                onChange={getPartnerName}
                                text="Partner Name"
                            />

                            <Input
                                type='textarea'
                                value={partnerAddress}
                                onChange={getPartnerAddress}
                                text="Partner Address"
                            />
                            <div className={Styles.row}>
                                <Button loading={loading.partner_detail} onClick={onClickPartnerDetailHandler}>Next</Button>
                            </div>
                            <MultiSelectDropDown
                                optionsArray={policyDetails}
                                selectedArray={policyDetailsAllocated}
                                default_value='Policy Details To Be Allocated'
                                onChange={getPolicyDetailsAllocated}
                                disable={false}
                            />
                            <div className={Styles.row}>
                                <Button onClick={onClickHandler}>Next</Button>
                            </div>
                    </div>
                </div>
            </div>
            <div className={Styles.create_right}>
                <HTMLViewer htmlContent={htmlContent}/>
            </div>
        </div>
    )
}

export default Create