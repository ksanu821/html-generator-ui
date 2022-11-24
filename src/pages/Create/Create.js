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
    const [coverDetails,setCoverDetails] = useState([])
    const [coverDetailsAllocated,setCoverDetailsAllocated] = useState([])
    const [htmlContent, setHtmlContent] = useState('')
    const [loading,setLoading] = useState({
        template_details:false,
        partner_detail:false,
        page:false,
        policy_detail:false,
        cover_detail:false
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
            const coverDetails = await axios.get("http://localhost:8080/getCovers")
            setCoverDetails(coverDetails.data)
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

    const getCoversAllocated=(data)=>{
        setCoverDetailsAllocated([...data])
    }

    const onClickSendTemplateName=async()=>{
        try{
            setLoading((loading)=>(
                {...loading,
                template_details:true}
            ))
            const {data} = await axios.post('http://localhost:8080/createTemplate',{
                "template_name":templateName,
                "lob":"loan",
                "insured_details_list":null,
                "coverage_details_list":null,
                "partner_details":null
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
                "lob":"loan",
                "template_name":templateName,
                "insured_details_list":null,
                "coverage_details_list":null
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

    const onClickPolicyDetailsHandler=async()=>{
        try{
            setLoading((loading)=>(
                {...loading,
                policy_detail:true}
            ))
            const {data} = await axios.post('http://localhost:8080/createInsuredDetails',{
                "template_name":templateName,
                "lob":"loan",
                "insured_details_list":policyDetailsAllocated,
                "coverage_details_list":null,
                "partner_details":null
            })
            setHtmlContent(data)
        }catch(err){
            console.log(err)
        }finally{
            setLoading((loading)=>(
                {...loading,
                policy_detail:false}
            ))
        }
        console.log("Clicked")
    }

    const onClickCoverDetailsHandler=async()=>{
        try{
            setLoading((loading)=>(
                {...loading,
                cover_detail:true}
            ))
            const {data} = await axios.post('http://localhost:8080/createCoverageDetails',{
                "template_name":templateName,
                "lob":"loan",
                "insured_details_list":null,
                "coverage_details_list":coverDetailsAllocated,
                "partner_details":null
            })
            setHtmlContent(data)
        }catch(err){
            console.log(err)
        }finally{
            setLoading((loading)=>(
                {...loading,
                cover_detail:false}
            ))
        }
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
                        <div className={Styles.subForm}>
                            <MultiSelectDropDown
                                optionsArray={policyDetails}
                                selectedArray={policyDetailsAllocated}
                                default_value='Policy Details To Be Allocated'
                                onChange={getPolicyDetailsAllocated}
                                disable={false}
                            />
                        </div>
                        <div className={Styles.row}>
                            <Button loading={loading.policy_detail} onClick={onClickPolicyDetailsHandler}>Next</Button>
                        </div>
                        <div className={Styles.subForm}>
                            <MultiSelectDropDown
                                optionsArray={coverDetails}
                                selectedArray={coverDetailsAllocated}
                                default_value="Cover Details To Be Allocated"
                                onChange={getCoversAllocated}
                                disable={false}
                            />
                        </div>
                        <div className={Styles.row}>
                            <Button loading={loading.cover_detail} onClick={onClickCoverDetailsHandler}>Next</Button>
                        </div>
                        <div className={Styles.footer}>
                            <h1>Footer</h1>
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