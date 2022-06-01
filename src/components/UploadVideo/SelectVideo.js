import React, { useState } from 'react'
import PublishIcon from '@mui/icons-material/Publish';
import './styles.css';
import { TextField, Button } from '@mui/material';
import {v4 as uuidv4} from 'uuid'
import { useAppContext } from '../../context/appContext';

const SelectVideo = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState(0);
    const [thumbnail, setThumbnail] = useState(null);
    const [video, setVideo] = useState(null);
    const [thumbnailURL, setThumbnailURL] = useState(null);
    const [videoURL, setVideoURL] = useState(null)

    const [id, setId] = useState(uuidv4)

    const [videoUploaded, setVideoUploaded]= useState(false)
    const [thumbnailUploaded, setThumbnailUploaded] = useState(false)

    const {currentUser} = useAppContext();

    const createID = () => setId(uuidv4())

    const handleSubmit = () => {
        createID();
    }

    const thumbnailChange = (e) => {
        if(e.target.files[0]){
            setThumbnail(e.target.files[0])
        }
    }

    const videoChange = (e) => {
        if(e.target.files[0]){
            setVideo(e.target.files[0])
        }
    }

    return (
        <div className='SelectVideo'>
            <div className="SelectVideo_header">
                <h1>UPLOAD NEW VIDEO</h1>
            </div>

            <div className="SelectVideo_content">
                <PublishIcon className='SelectVideo_publishIcon' />
                <p>Drag and Drop the files to Upload</p>
                <input className='customFile_input' type='file' onChange={videoChange}/>

                <TextField label='Title' variant='outlined' className='SelectVideo_input' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <TextField label='Description' multiline rows={6} variant='outlined' className='SelectVideo_input' value={description} onChange={(e)=>setDescription(e.target.value)}/>

                <input className='customFile_thumbnail' type='file' onChange={thumbnailChange}/>

                <p className='SelectVideo_text'>By submitting your videos to Animino you acknowledge that you agree to Animino's Terms of Service and Community guidelines. Please be sure to not violate other's copyrights or Privacy rights. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, officia. At enim eveniet molestias, nostrum laborum obcaecati beatae ducimus sed magni commodi, culpa ipsum adipisci illum, blanditiis dolore minima quasi. Ex libero numquam aut recusandae</p>

                <Button variant='contained' className='UploadButton'>UPLOAD</Button>

            </div>
        </div>
    )
}

export default SelectVideo