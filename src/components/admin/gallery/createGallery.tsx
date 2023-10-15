// "use strict";
// import { AddIcon } from '@/icons/action';
// import axios from 'axios';
// import React, { useState } from 'react'

// const CreateGallery = () => {

//   const [files, setFiles] = React.useState<File[]>([]);
//   // const [imageOne, setImageOne] = useState<File>();
//   // const [imageOne, setImageOne] = useState<File>();
//   // const [imageOne, setImageOne] = useState<File>();
//   // const [imageOne, setImageOne] = useState<File>();
//   // const [imageOne, setImageOne] = useState<File>();
//   // const [imageOne, setImageOne] = useState<File>();
//   // const [imageOne, setImageOne] = useState<File>();
//   // const [imageOne, setImageOne] = useState<File>();
//   // const [imageOne, setImageOne] = useState<File>();

//   // const handleClick = async() => {
//   //   const data = new FormData()
//   //   data.append("file", file)
//   //   data.append("upload_preset", "gallery")

//   //   try {
//   //     const res = await axios.post("https://api.cloudinary.com/v1_1/dfxuti2nl/image/upload", data)
//   //     console.log(res);

//   //   } catch (error) {

//   //   }
//   // }

//   function imageVerify(file: File) {
//     const types = ["image/png", "image/jpeg", "image/jpg"];
//     if (types.every((type) => file.type !== type)) {
//       alert(`${file.type} is not a supported format`);
//       return false;
//     }
//     return true;
//   }
//   return (
//     <>
//       <div className='w-full h-full b transition-all duration-300'>

//         <div className="grid grid-cols-8 grid-rows-11 gap-2 h-full m-5">
//           <div className=" bg-slate-200 col-span-2 row-span-3" style={{
//             backgroundImage: `url(${imageOne
//               ? URL.createObjectURL(imageOne)
//               : "https://drive.google.com/uc?id=1469PGeDEgnK5caEumLfGGUufCI0MY133"
//               })`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}>
//             <label
//             htmlFor="file-upload"
//             className="cursor-pointer bg-secondary space-x-2 relative bottom-0 right-0 w-8 h-8  text-white flex items-center justify-center rounded-full"
//           >
//               <AddIcon className="w-6 h-6 fill-white relative bottom-0 left-0" />
//             </label>
//             <input
//               id="file-upload"
//               className="hidden"
//               type="file"
//               onChange={(e) => {
//                 if (e.target.files) {
//                   const file = e.target.files[0];
//                   if (imageVerify(file)) {
//                     setImageOne(file);
//                   }
//                 }
//               }}
//             />
//             </div>
//           <div className=" bg-slate-200 col-span-2 row-span-5 col-start-1 row-start-4 " style={{
//             backgroundImage: `url(${imageTwo
//               ? URL.createObjectURL(imageTwo)
//               : "https://drive.google.com/uc?id=1469PGeDEgnK5caEumLfGGUufCI0MY133"
//               })`,
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}>
//                 <label
//             htmlFor="file-upload"
//             className="cursor-pointer bg-secondary space-x-2 relative bottom-0 right-0 w-8 h-8  text-white flex items-center justify-center rounded-full"
//           >
//               <AddIcon className="w-6 h-6 fill-white relative bottom-0 left-0" />
//             </label>
//             <input
//               id="file-upload"
//               className="hidden"
//               type="file"
//               onChange={(e) => {
//                 if (e.target.files) {
//                   const file = e.target.files[0];
//                   if (imageVerify(file)) {
//                     setImageTwo(file);
//                     console.log(imageTwo);

//                   }
//                 }
//               }}
//             />
//           </div>
//           <div className=" bg-slate-200 col-span-2 row-span-3 col-start-1 row-start-9">7</div>
//           <div className=" bg-slate-200 col-span-2 row-span-3 col-start-3 row-start-1">8</div>
//           <div className=" bg-slate-200 col-span-2 row-span-3 col-start-3 row-start-4">9</div>
//           <div className=" bg-slate-200 col-span-2 row-span-5 col-start-3 row-start-7">10</div>
//           <div className=" bg-slate-200 col-span-2 row-span-3 col-start-5 row-start-1">11</div>
//           <div className=" bg-slate-200 col-span-2 row-span-5 col-start-5 row-start-4">12</div>
//           <div className=" bg-slate-200 col-span-2 row-span-3 col-start-5 row-start-9">13</div>
//           <div className=" bg-slate-200 col-span-2 row-span-5 col-start-7 row-start-1">14</div>
//           <div className=" bg-slate-200 col-span-2 row-span-3 col-start-7 row-start-6">16</div>
//           <div className=" bg-slate-200 col-span-2 row-span-3 col-start-7 row-start-9">17</div>
//         </div>

//       </div>
//     </>
//   )
// }

// export default CreateGallery

import { AddIcon } from "@/icons/action";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";

const createGallery = () => {
  const [files, setFiles] = React.useState<File[]>([]);
  const [fileee, setFile] = React.useState<File>();

  function imagesVerify(files: FileList | null) {
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileType = file.type;
        const validImageTypes = ["image/gif", "image/jpeg", "image/png"];
        if (!validImageTypes.includes(fileType)) {
          alert("Invalid File Type");
          return false;
        }
      }
      return true;
    } 
    return false;
  }

  async function handleUpload() {
    console.log(files);

    if (files.length > 0) {
      const formData = new FormData();
      files.forEach((file) => {
        formData.append("files", file);
      });
      console.log(formData);

      const res = await axios.post(
        "https://rms-mu.vercel.app/gallery/many",
        formData
      );
      toast.success("Images Uploaded Successfully 🎉 preview will take some time to load...");
      console.log(res);
    }
  }
  return (
    <div className="  w-full h-full ">
      <h1 className="text-secondary text-center font-semibold">Image Upload</h1>

      {/* upload many images */}
      <div className="flex items-center justify-center gap-4 mt-2">
        {/* <label
          htmlFor="file-upload"
          className="cursor-pointer bg-secondary space-x-2 relative bottom-0 right-0 w-8 h-8  text-white flex items-center justify-center rounded-full"
        >
          <AddIcon className="w-6 h-6 fill-white relative bottom-0 left-0" />
        </label> */}
        <input
          className="file-input file-input-bordered file-input-secondary w-1/3 max-w-xs"
          type="file"
          accept="image/*"
          onChange={(e) => {
            const files = e.target.files;
            if (imagesVerify(files)) {
              setFiles(Array.from(files as FileList));
            }
          }}
          multiple
        />

        <button
          onClick={() => {
            console.log(files);
            handleUpload();
          }}
          className="btn btn-primary "
        >
          Upload 
        </button> 
      </div>

      <div className="w-[80%] h-[80%] overflow-y-auto mt-5 flex items-center justify-center ">
        <div className="images w-full h-[90%] flex flex-wrap overflow-y-auto items-center justify-center  ">
          {files &&
            files.map((image, index) => {
              return (
                <div
                  key={index}
                  className="h-36 w-36 ml-2 mt-2 rounded-md border-2 border-secondary relative"
                  style={{
                    backgroundImage: `url(${
                      files 
                        ? URL.createObjectURL(files[index])
                        : "https://drive.google.com/uc?id=1469PGeDEgnK5caEumLfGGUufCI0MY133"
                    })`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {/* <img src={image.name} height="200" alt="upload" /> */}

                  <p>{index + 1}</p>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default createGallery;
