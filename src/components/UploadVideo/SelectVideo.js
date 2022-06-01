import React, { Component } from 'react'
import { TextField, Button } from '@mui/material'
import PublishIcon from '@mui/icons-material/Publish';
import './styles.css';
import { UploadTask } from 'firebase/storage';
import firebase from 'firebase'

export class SelectVideo extends Component {
    constructor(props) {
        super(props);
        this.state={
            files: null
        }
    }

    handleChange = (files) => {
        this.setState({
            files: files
        })
    }

    handleSave = () => {
        let bucketName = 'images'
        let file = this.state.files[0]
        let storageRef = firebase.storage().ref(`${bucketName}/${file.name}`)
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, () => {
            let downloadURL = uploadTask.snapshot.downloadURL
        })
    }

    render() {
        return (
            <div className='SelectVideo'>
                <div className="SelectVideo_header">
                    <h1>UPLOAD NEW VIDEO</h1>
                </div>

                <div className="SelectVideo_content">
                    <PublishIcon className='SelectVideo_publishIcon' />
                    <p>Drag and Drop the files to Upload</p>
                    <input className='customFile_input' type='file' onChange={(e) => {this.handleChange(e.target.files)}} />

                    <TextField label='Title' variant='outlined' className='SelectVideo_input' />
                    <TextField label='Description' multiline rows={6} variant='outlined' className='SelectVideo_input' />

                    <input className='customFile_thumbnail' type='file'  />

                    <p className='SelectVideo_text'>By submitting your videos to Animino you acknowledge that you agree to Animino's Terms of Service and Community guidelines. Please be sure to not violate other's copyrights or Privacy rights. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim, officia. At enim eveniet molestias, nostrum laborum obcaecati beatae ducimus sed magni commodi, culpa ipsum adipisci illum, blanditiis dolore minima quasi. Ex libero numquam aut recusandae</p>

                    <Button variant='contained' className='UploadButton' onClick={this.handleSave}>UPLOAD</Button>

                </div>
            </div>
        )
    }
}

export default SelectVideo
