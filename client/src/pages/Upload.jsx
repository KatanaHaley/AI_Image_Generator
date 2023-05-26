// import React, { useState } from 'react'

// const Upload = () => {
//   const [selectedImage, setSelectedImage] = useState(null);

//   const uploadImage = async(e) => {
//     console.log(e.target.files[0]);

//     const formData = new FormData()
//     formData.append('file', e.target.files[0])
//     setSelectedImage(e.target.files[0])

//     try {
//       const options = {
//         method: "POST",
//         body: formData
//       }

//       const response = await fetch('https://image-generator-with-ai.onrender.com/api/v1/dalle', options)
//       const data = await response.json()
//       console.log(data)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   return (
//     <div>
//       <p className="text-white">
//     Upload
//     <span>

//      <label htmlFor="files">Upload an image </label> 
//      <input onChange={uploadImage} id="file" accept="image/*" type="file" ></input>
//     </span>
//      to edit
//       </p>
//     </div>
//   )
// }

// export default Upload