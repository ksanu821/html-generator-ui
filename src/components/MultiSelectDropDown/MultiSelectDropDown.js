import { useEffect, useState } from 'react';
import Styles from './MultiSelectDropDown.module.scss'
import {ImCheckboxChecked, ImCheckboxUnchecked} from 'react-icons/im'
import Chip from '../Chip/Chip';
import { AiFillCaretDown } from 'react-icons/ai';
import Popup from '../Popup/Popup';
import Input from '../Input/Input';
const MultiSelectDropDown=(props)=>{
    const {optionsArray,default_value,onChange,selectedArray,disable,showPopup}=props;
    const [filterArray,setFilterArray]=useState([])
    const [showDropDown,setShowDropDown]=useState(false)
    const [popupVisible,setPopupVisible] = useState(false)
    const [subDescription,setSubDescription] = useState('')
    const [description,setDescription] = useState('')
    const [selectedValue, setSelectedValue] = useState(null)
    console.log("SELECTED ARRAY--->",selectedArray)

    useEffect(()=>{
        setFilterArray(optionsArray.map((options)=>({
            ...options,
            name:options.display_name,
            checked:false
        })))
    },[optionsArray])

    const check=(value)=>{
        const filteredArray =filterArray.map((option,index)=>{
            let newOption={
                ...option
            }
            if(value.id===option.id){
                if(showPopup){
                    newOption={
                        ...newOption,
                        description:description,
                        sub_description:subDescription
                    }
                }
                if(!option.checked){
                    const updatedArray=[...selectedArray,newOption]
                    onChange(updatedArray)
                }else{
                    const updatedArray= selectedArray.filter((selectedValue)=>selectedValue.id!==newOption.id)
                    onChange(updatedArray)
                }
                
                return {
                    ...newOption,
                    checked:!newOption.checked
                }
            }else{
                return {
                    ...newOption
                }
            }
        })
        setFilterArray([...filteredArray])
    }

    const checkForParticularRow=(value)=>(e)=>{
        e.preventDefault();
        if(showPopup){
            setPopupVisible(true)
            setSelectedValue(value)
        }else{
            check(value)
        }
        
    }

    const enableDropDown=(e)=>{
        e.preventDefault()
        if(!disable){
            setShowDropDown(!showDropDown)
        }
    }

    const removeSelectedValue=(value)=>(e)=>{
        e.preventDefault();
        const updatedArray= selectedArray.filter((selectedOption)=>selectedOption.id!==value.id)
        onChange(updatedArray)
        setFilterArray((filterArray)=>{
            return filterArray.map((filterValue)=>{
                if(filterValue.name===value.name){
                    return {
                        ...filterValue,
                        checked:false
                    }
                }else{
                    return {
                        ...filterValue
                    }
                }
            })
        })

    }

    const getSubDescription = (value)=>{
        setSubDescription(value)
    }

    const getDescription=(value)=>{
        setDescription(value)
    }

    const popupSubmit=(value)=>{
        check(value)
        setSelectedValue(null)
        setSubDescription('')
        setDescription('')
    }

    const popupClose=()=>{
        setPopupVisible(false)
        setSelectedValue(null)
        setSubDescription('')
        setDescription('')
    }

    if(showPopup && popupVisible && selectedValue){
        return (
            <Popup value={selectedValue} onSubmit={popupSubmit} onClose={popupClose} submitText={"Save"}>
                <Input
                    type='text'
                    value={subDescription}
                    onChange={getSubDescription}
                    text="Brief Description"
                />
                <Input
                    type='textarea'
                    value={description}
                    onChange={getDescription}
                    text="Detailed Description"
                />
            </Popup>
        )
    }

    return(
        <div className={Styles.multiSelectDropDown}>
            <button onClick={enableDropDown}>
                {
                     selectedArray.length===0 ?(
                        <div className={Styles.multipSelecDropDownContainer}>
                            <h1>{default_value}</h1>
                        </div>
                    ):(
                        <div className={Styles.selectedValues} onClick={(e)=>{e.stopPropagation()}}>
                            {
                                selectedArray.map((value,index)=>(
                                    <Chip key={index} text={value.name} onClose={removeSelectedValue(value)}/>
                                ))
                            }
                        </div>
                    )
                }
                <div>
                    <AiFillCaretDown className={showDropDown?Styles.rotate:Styles.completeRotate}/>
                </div>
            </button>
            {
                showDropDown && (
                    <div className={Styles.dropDown}>
                        {
                            filterArray.map((value,index)=>(
                                <div key={index} className={Styles.dropDownOption} onClick={checkForParticularRow(value)}>
                                    <button>{value.checked?<ImCheckboxChecked  style={{color:'green'}}/>:<ImCheckboxUnchecked/>}</button>
                                    <p>{value.name}</p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    )
}

export default MultiSelectDropDown;