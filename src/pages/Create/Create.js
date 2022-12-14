import axios from 'axios'
import { useEffect, useState } from 'react'
import Button from '../../components/Button/Button'
import HTMLViewer from '../../components/HTMLViewer/HTMLViewer'
import Input from '../../components/Input/Input'
import MultiSelectDropDown from '../../components/MultiSelectDropDown/MultiSelectDropDown'
import PageLoader from '../../components/PageLoader/PageLoader'
import {AiOutlineDownload} from 'react-icons/ai'
// import { cover_details, insured_details } from '../../data/mockdata'
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
    const [states, setStates] = useState({
        template:"in_progress",
        partner:"start",
        policy_detail:"start",
        cover_detail:"start"
    })

    // const [states, setStates] = useState({
    //     template:"completed",
    //     partner:"completed",
    //     policy_detail:"completed",
    //     cover_detail:"in_progress"
    // })
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
            setStates((states)=>({
                ...states,
                template:"completed",
                partner:"in_progress"
            }))
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
            setStates((states)=>({
                ...states,
                partner:"completed",
                policy_detail:"in_progress"
            }))
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
            setStates((states)=>({
                ...states,
                policy_detail:"completed",
                cover_detail:"in_progress"
            }))
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
            setStates((states)=>({
                ...states,
                cover_detail:"completed",
            }))
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

    const onClickDownloadHandler = ()=>{
        console.log("Click")
        const texts = [htmlContent]
         const file = new Blob(texts, {type: 'text/plain'});
        const element = document.createElement("a");
        element.href = URL.createObjectURL(file);
        element.download = templateName + ".html";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
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
                        {
                            states.template ==='in_progress' &&(
                                <div className={Styles.row}>
                                    <Button loading={loading.template_details} onClick={onClickSendTemplateName}>Next</Button>
                                </div>
                            )
                        }
                        {
                            (states.partner==='in_progress' || states.partner ==='completed') && (
                                <>  
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
                                </>
                            )
                        }
                        {
                            states.partner ==='in_progress' && (
                                <div className={Styles.row}>
                                    <Button loading={loading.partner_detail} onClick={onClickPartnerDetailHandler}>Next</Button>
                                </div>
                            )
                        }
                        {
                            (states.policy_detail==='in_progress' || states.policy_detail==='completed') &&(
                                <div className={Styles.subForm}>
                                    <MultiSelectDropDown
                                        optionsArray={policyDetails}
                                        selectedArray={policyDetailsAllocated}
                                        default_value='Policy Details To Be Allocated'
                                        onChange={getPolicyDetailsAllocated}
                                        disable={false}
                                    />
                                </div>
                            )
                        }
                        {
                            states.policy_detail==='in_progress' && (
                                <div className={Styles.row}>
                                    <Button loading={loading.policy_detail} onClick={onClickPolicyDetailsHandler}>Next</Button>
                                </div>
                            )
                        }
                        {
                            (states.cover_detail==='in_progress' || states.cover_detail==='completed') && (
                                <div className={Styles.subForm}>
                                    <MultiSelectDropDown
                                        showPopup={true}
                                        optionsArray={coverDetails}
                                        selectedArray={coverDetailsAllocated}
                                        default_value="Cover Details To Be Allocated"
                                        onChange={getCoversAllocated}
                                        disable={false}
                                    />
                                </div>
                            )
                        }
                        {
                            states.cover_detail === 'in_progress' && (
                                <div className={Styles.row}>
                                    <Button loading={loading.cover_detail} onClick={onClickCoverDetailsHandler}>Next</Button>
                                </div>
                            )
                        }
                        {
                            states.cover_detail==="completed" && (
                                <div className={Styles.footer}>
                                    <Button onClick={onClickDownloadHandler}>
                                        Download <AiOutlineDownload color='white'/>
                                    </Button>
                                </div>
                            )
                        }
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