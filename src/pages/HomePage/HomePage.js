import axios from 'axios'
import { useEffect, useState } from 'react'
import PageLoader from '../../components/PageLoader/PageLoader'
import { getTemplateList } from '../../data/mockdata'
import Styles from './HomePage.module.scss'
import Button from '../../components/Button/Button'
import { useHistory } from 'react-router-dom'
const HomePage = (props)=>{
    const [loading,setLoading] = useState({
        page:false
    })
    const [templateList, setTemplateList] = useState(getTemplateList)
    const history = useHistory()
    const fetchTemplates = async()=>{
        try{
            setLoading((loading)=>({
                ...loading,
                page:true
            }))
            const {data} = await axios.get("http://localhost:8080/getTemplatesByLob/loan")
            setTemplateList(data)

        }catch(err){
            console.log(err)
        }finally{
            setLoading((loading)=>({
                ...loading,
                page:false
            }))
        }
    }
    
    useEffect(()=>{
        fetchTemplates()
    },[])

    const viewPage=(templateName)=>{
        history.push(`/${templateName}`)
    }

    if(loading.page){
        return(
            <div className={Styles.homePage}>
                <PageLoader />
            </div>
        )
    }

    return(
        <div className={Styles.homePage}>
            <div className={Styles.homePageContainer}>
                <div className={Styles.homePageContainerColumn}>
                    <div className={Styles.homePageContainerColumnLeft}>
                        <h1>Sl No</h1>
                    </div>
                    <div className={Styles.homePageContainerColumnMiddle}>
                        <h1>Template Name</h1>
                    </div>
                    <div className={Styles.homePageContainerColumnRight}>
                        <h1>Actions</h1>
                    </div>
                </div>
                {
                    templateList.map((template,index)=>(
                    <div className={Styles.homePageBodyRow}>
                        <div className={Styles.homePageContainerRowLeft}>
                            <p>{index+1}</p>
                        </div>
                        <div className={Styles.homePageContainerRowMiddle}>
                            <p>{template.template_name}</p>
                        </div>
                        <div className={Styles.homePageContainerColumnRight}>
                            <Button small={true} onClick={()=>{
                                viewPage(template.template_name)
                            }}>
                                Open
                            </Button>
                        </div>
                    </div>
                    ))
                }
                
            </div> 
        </div>
    )
}

export default HomePage