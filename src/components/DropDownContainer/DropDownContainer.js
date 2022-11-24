import Dropdown from '../Dropdown/Dropdown';
import Styles from './DropDownContainer.module.scss'
const DropDownContainer = (props)=>{
    const {labels,options} = props
    return(
        <div className={Styles.container}>
            <div className={Styles.label_column}>
                {
                    !labels && labels.length!==0 && (
                        labels.map((label,index)=>(
                            <Label key={index} label={label}/>
                        ))
                    )
                }
            </div>
            <div className={Styles.dropdown}>
                <Dropdown/>
            </div>
        </div>
    )
}

export default DropDownContainer;