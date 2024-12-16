import React, { useState } from 'react'
import { toast } from 'react-toastify';

const usePreviewImg = () => {
  const [selectedFile,setSelectedFile]=useState(null);
  const maxFileSizeinBytes=2*1024*1024;// 2mb

  const handleImageChange=(e)=>{
        const file=e.target.files[0];
        if(file && file.type.startsWith("image/")){
            if(file.size>maxFileSizeinBytes){
                toast.warning("File Size if too large: " + file.size+" Please size less than 2mb");
                setSelectedFile(null);
                return;
            }

            const reader=new FileReader();
            reader.onloadend=()=>{
                setSelectedFile(reader.result)
            }
            reader.readAsDataURL(file);
        }
        else{
            toast.warning("Please upload an image file");
            setSelectedFile(null);
        }
  }

  return {selectedFile,handleImageChange,setSelectedFile};
}

export default usePreviewImg
