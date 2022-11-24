const Label = (props)=>{
    const {is_close_enabled} =props
    return(
        <div className={Styles.lable}>
            <div className={Styles.text}>
                {props.children}
            </div>
            {
                is_close_enabled && (
                    <div className={Styles.close}>
                        <p>Close</p>
                    </div>
                )
            }
        </div>
    )
}