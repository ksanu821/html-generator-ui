import { useEffect, useState } from 'react';
import Styles from './MultiSelectDropDown.module.scss'
import {ImCheckboxChecked, ImCheckboxUnchecked} from 'react-icons/im'
import Chip from '../Chip/Chip';
import { AiFillCaretDown } from 'react-icons/ai';
const MultiSelectDropDown=(props)=>{
    const {optionsArray,default_value,onChange,selectedArray,disable}=props;
    const [filterArray,setFilterArray]=useState([])
    const [showDropDown,setShowDropDown]=useState(false)
    console.log("SELECTED ARRAY--->",selectedArray)

    useEffect(()=>{
        setFilterArray(optionsArray.map((options)=>({
            ...options,
            name:options.display_name,
            checked:false
        })))
    },[optionsArray])

    const checkForParticularRow=(value)=>(e)=>{
        e.preventDefault();
        const filteredArray =filterArray.map((option,index)=>{
            if(value.id===option.id){
                if(!option.checked){
                    const updatedArray=[...selectedArray,option]
                    onChange(updatedArray)
                }else{
                    const updatedArray= selectedArray.filter((selectedValue)=>selectedValue.id!==option.id)
                    onChange(updatedArray)
                }
                
                return {
                    ...option,
                    checked:!option.checked
                }
            }else{
                return {
                    ...option
                }
            }
        })
        setFilterArray([...filteredArray])
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