import Header from '../Header/Header'
import Styles from './Layout.module.scss'
const Layout=(props)=>{
    return(
        <div className={Styles.layout}>
            <div className={Styles.layout_header}>
                <Header/>
            </div>
            <div className={Styles.layout_container}>
                {props.children}
            </div>
        </div>
    )
}
 export default Layout
