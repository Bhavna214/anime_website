import React from 'react'
import { TextField, Button } from '@mui/material'
import PublishIcon from '@mui/icons-material/Publish';
import './styles.css';
import { useState } from 'react';
import { storage } from '../../lib/firebase';
import { ref, uploadBytes } from 'firebase/storage';

const SelectVideo = () => {
    const [videoUpload, setVideoUpload] = useState(null)
    const handleUpload = () => {
        if(videoUpload === null) return;
        const videoRef = ref(storage,`videos/${videoUpload.name}`)
        uploadBytes(videoRef,videoUpload).then(() => {
            alert('Video uploaded')
        }).catch(() => {
            alert("Couldn't upload the video")
        })
    }

  return (
    <div className='SelectVideo'>
                <div className="SelectVideo_header">
                    <h1>UPLOAD NEW VIDEO</h1>
                </div>

                <div className="SelectVideo_content">
                    <PublishIcon className='SelectVideo_publishIcon' />
                    <p>Drag and Drop the files to Upload</p>
                    <input className='customFile_input' type='file' onClick={(event) => {setVideoUpload(event.target.files[0])}} />

                    <TextField label='Title' variant='outlined' className='SelectVideo_input' />
                    <TextField label='Description' multiline rows={6} variant='outlined' className='SelectVideo_input' />

                    <input className='customFile_thumbnail' type='file'  />

                    <p className='SelectVideo_text'>By submitting your videos to Animino you acknowledge that you agree to Animino's Terms of Service and Community guidelines. Please be sure to not violate other's copyrights or Privacy rights. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, officia. At enim eveniet molestias, nostrum laborum obcaecati beatae ducimus sed magni commodi, culpa ipsum adipisci illum, blanditiis dolore minima quasi. Ex libero numquam aut recusandae</p>

                    <Button variant='contained' className='UploadButton' onClick={handleUpload}>UPLOAD</Button>

                </div>
            </div>
  )
}

export default SelectVideo






// export class SelectVideo extends Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             files: null
//         }
//     }

//     handleChange = (files) => {
//         this.setState({
//             files: files
//         })
//     }

//     handleSave = () => {
//         let bucketName = 'images'
//         let file = this.state.files[0]
//         let storageRef = ref(storage,`${bucketName}/${file.name}`)
//         let uploadTask = storageRef.put(file)
//         uploadTask.on(storage.TaskEvent.STATE_CHANGED, () => {
//             let downloadURL = uploadTask.snapshot.downloadURL
//         })
//     }

//     render() {
//         return (
            // <div className='SelectVideo'>
            //     <div className="SelectVideo_header">
            //         <h1>UPLOAD NEW VIDEO</h1>
            //     </div>

            //     <div className="SelectVideo_content">
            //         <PublishIcon className='SelectVideo_publishIcon' />
            //         <p>Drag and Drop the files to Upload</p>
            //         <input className='customFile_input' type='file' onChange={(e) => {this.handleChange(e.target.files)}} />

            //         <TextField label='Title' variant='outlined' className='SelectVideo_input' />
            //         <TextField label='Description' multiline rows={6} variant='outlined' className='SelectVideo_input' />

            //         <input className='customFile_thumbnail' type='file'  />

            //         <p className='SelectVideo_text'>By submitting your videos to Animino you acknowledge that you agree to Animino's Terms of Service and Community guidelines. Please be sure to not violate other's copyrights or Privacy rights. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, officia. At enim eveniet molestias, nostrum laborum obcaecati beatae ducimus sed magni commodi, culpa ipsum adipisci illum, blanditiis dolore minima quasi. Ex libero numquam aut recusandae</p>

            //         <Button variant='contained' className='UploadButton' onClick={this.handleSave}>UPLOAD</Button>

            //     </div>
            // </div>
//         )
//     }
// }

// export default SelectVideo
