import { useEffect } from 'react'
import Styles from './Popup.module.scss'
import {AiFillCloseSquare} from 'react-icons/ai'
import Button from '../Button/Button'

const Popup = (props)=>{
    const title=props.value.display_name
    useEffect(()=>{
        document.body.style.overflow='hidden'
        return()=>{
            document.body.style.overflow='auto'
        }
    })

    const submitHandler=()=>{
        props.onSubmit(props.value)
    }
    return(
        <div className={Styles.popupContainer}>
            <div className={Styles.popup}>
                <div className={Styles.popupHeader}>
                    <p style={{color:'white'}}>{title}</p>
                    <div className={Styles.popupHeaderIcon} onClick={props.onClose}>
                        <AiFillCloseSquare color='white'/>
                    </div>
                </div>
                <div className={Styles.popupBody}>
                    {props.children}
                    <div className={Styles.button}>
                        <Button onClick={submitHandler}>
                            {props.submitText}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Popup