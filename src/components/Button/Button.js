
import MiniLoader from '../MiniLoader/MiniLoader';
import Styles from './Button.module.scss';
function Button(props){
    const {onClick,loading=false}=props;
    return(
        <div className={Styles.buttonContainer}>
            <button onClick={onClick} className={Styles.button}>
                {
                loading?(
                    <MiniLoader color='#ffffff'/>
                ):(
                    props.children
                )
                }
            </button>
        </div>
    )
}

export default Button;