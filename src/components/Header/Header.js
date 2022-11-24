import Styles from './Header.module.scss'
const Header=()=>{
    return(
        <div className={Styles.header}>
            <div className={Styles.header_left}>
                <img src="https://www.acko.com/static/images/Acko_Logo_Pale.png" alt=''/>
            </div>
            <div className={Styles.header_right}></div>
        </div>
    )
}

export default Header;