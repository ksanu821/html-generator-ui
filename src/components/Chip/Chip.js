import Styles from './Chip.module.scss';
import {IoMdCloseCircleOutline} from 'react-icons/io'
const Chip=(props)=>{
    const {text,onClose}=props;
    return (
        <div className={Styles.chip}>
            <div className={Styles.chipText}>
                {text}
            </div>
            <div className={Styles.close} onClick={onClose}>
                <IoMdCloseCircleOutline/>
            </div>
        </div>
    )
}

export default Chip;