import Styles from './Header.module.scss'
const Header=()=>{
    return(
        <div className={Styles.header}>
            <div className={Styles.header_left}>
                {/* <img src='' alt=''/> */}
                <h1>Acko Image</h1>
            </div>
            <div className={Styles.header_right}></div>
        </div>
    )
}

export default Header;