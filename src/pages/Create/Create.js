import axios from 'axios'
import { useState } from 'react'
import Button from '../../components/Button/Button'
import HTMLViewer from '../../components/HTMLViewer/HTMLViewer'
import Input from '../../components/Input/Input'
import MultiSelectDropDown from '../../components/MultiSelectDropDown/MultiSelectDropDown'
import { insured_details } from '../../data/mockdata'
import Styles from './Create.module.scss'
const Create = (props)=>{
    const [partnerName, setPartnerName] = useState('')
    const [partnerAddress,setPartnerAddress] = useState('')
    const [masterPolicyNumber,setMasterPolicyNumber] = useState('')
    const [policyDetails,setPolicyDetails] = useState(insured_details)
    const [policyDetailsAllocated,setPolicyDetailsAllocated] = useState([])
    const [htmlContent, setHtmlContent] = useState(`<html><body><h1>${masterPolicyNumber}</h1></body></html>`)
    const [loading,setLoading] = useState({
        partner_detail:false
    })

    const getPartnerName = (value)=>{
        setPartnerName(value)
    }

    const getPartnerAddress =(value)=>{
        setPartnerAddress(value)
    }

    const getMasterPolicyNumber = (value)=>{
        console.log(value)
        setMasterPolicyNumber(value)
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
                "partner_name":partnerName,
                "master_policy_number":masterPolicyNumber,
                "partner_address":partnerAddress
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

    const onClickHandler=()=>{
        console.log("Clicked")
    }
    
    return(
        <div className={Styles.create}>
            <div className={Styles.create_left}>
                <div className={Styles.form}>
                    <div className={Styles.formControl}>
                            <Input
                                type='text'
                                value={partnerName}
                                onChange={getPartnerName}
                                text="Partner Name"
                            />

                            <Input
                                type='text'
                                value={masterPolicyNumber}
                                onChange={getMasterPolicyNumber}
                                text="Master Policy Number"
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