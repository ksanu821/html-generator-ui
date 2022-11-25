
import MiniLoader from '../MiniLoader/MiniLoader';
import Styles from './Button.module.scss';
function Button(props){
    const {onClick,loading=false,small=false}=props;
    return(
        <div className={small?Styles.small:Styles.buttonContainer}>
            <button onClick={onClick} className={small?Styles.buttonSmall:Styles.button}>
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