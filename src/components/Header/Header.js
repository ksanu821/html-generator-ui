import { Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import Styles from './Header.module.scss'
const Header=()=>{
    const history = useHistory()
    const show=window.location.pathname==='/create'
    const routeToHome=()=>{
        history.push('/')
    }
    return(
        <div className={Styles.header}>
            <div className={Styles.header_left} onClick={routeToHome}>
                <img src="https://www.acko.com/static/images/Acko_Logo_Pale.png" alt=''/>
            </div>
            <div className={Styles.header_right}>
                {
                    !show && (
                        <div className={Styles.header_right_box}>
                            <Link to={"/create"} className={Styles.headerLink}>
                                Create
                            </Link>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Header;