'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({label, name}) {
    const imageInput = useRef();
  const[pickedImage, setPickedImage] = useState();

    function handlePickClick(){
       imageInput.current.click();
    }
    function handleImagechange(event){

        const file = event.target.files[0];
        if(!file){
            setPickedImage(null);
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = ()=>{
            setPickedImage(fileReader.result);
        }

        fileReader.readAsDataURL(file);

    }
  return (
    <div className={classes.picker}>
        <label htmlFor={name}>{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!pickedImage && <p>No image picked yet.</p>}
                {
                    <Image src={pickedImage} alt='The selected image by the user.' fill/>
                }
            </div>
            <input id={name} name={name} type='file' accept='image/jpg, image/png' className={classes.input} ref={imageInput} onChange={handleImagechange} required/>
        <button type='button' className={classes.button} onClick={handlePickClick}>Pick an Image</button>
        </div>
    </div>
  )
}
