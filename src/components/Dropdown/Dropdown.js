import { useState } from 'react';
import Styles from './DropDown.module.scss'
import {AiFillCaretDown} from 'react-icons/ai'
function DropDown(props){
    const {default_value,value,click,optionsArray,disable}=props;
    const [showOption,setShowOptions]=useState(false)

    const center={
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
    }

    return(
        <>
        {
            showOption && (
                <div className={Styles.background} onClick={()=>{
                    setShowOptions(false)
                }}></div>
            )
        }
        <div className={`${Styles.dropdown} ${disable?Styles.disable:''}`}>
            <div className={Styles.dropdownButton} onClick={()=>{
                if(disable){
                    return
                }
                setShowOptions(!showOption)}}>
                <div style={center}>
                    <div style={{flex:'1',paddingLeft:'2px'}}>
                        <p className={`${Styles.dropDownHeader}`}>
                            {value === "" ? default_value : value}
                        </p>
                    </div>
                    <div style={{paddingLeft:'2px'}}>
                        <div>
                        <AiFillCaretDown className={showOption?Styles.rotate:Styles.completeRotate}/>
                        </div>
                    </div>
                </div>
            </div>
            {
                showOption && (
                <div
                style={{
                    borderRadius: "8px",
                    // padding: "10px 0",
                    backgroundColor: '#ffffff',
                    boxShadow: "0 3px 10px 0 rgba(0, 0, 0, 0.16)",
                    zIndex: 100,
                    position: 'absolute',
                    width: '100%',
                    maxHeight:'150px',
                    overflowY:'auto'
                }}
                >
                    {optionsArray.map((option) => {
                    return (
                        <div
                        key={option}
                        className={
                        value === option ? Styles.active : Styles.dropdownLink
                        }
                        onClick={() => {
                        click(option);
                        setShowOptions(false)
                        }}
                        >
                        {option}
                        </div>
                    );
            })}
        </div>

                )
            }

        </div>
        </>
    )
}

export default DropDown;