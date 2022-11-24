import Styles from './Input.module.scss'
const Input=(props)=>{
    const {text,type,value, onChange} = props

    const onChangeHandler = (e)=>{
        onChange(e.target.value)
    }


    return(
        <div className={Styles.input}>
            <div className={Styles.inputLabel}>
                <label>{text}</label>
            </div>
            <div className={Styles.inputContainer}>
                {
                    type ==='textarea' ?(
                        <textarea value={value} onChange={onChangeHandler}></textarea>
                    ):(
                        <input type={type} value={value} onChange={onChangeHandler} />    
                    )
                }
            </div>
        </div>
    )
}

export default Input