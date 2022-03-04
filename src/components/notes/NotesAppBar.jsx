import React from 'react';
import moment from 'moment';
import { useDispatch,useSelector} from 'react-redux';
import { startSaveNote, startUploading } from '../../actions/notes';

export const NotesAppBar = () => {
    const dispatch = useDispatch();
    const {active} = useSelector( state => state.notes );
    const noteDate = moment(active.date);
    const handleSaveNote = () => {
        dispatch(startSaveNote(active));
    }
    const handleSavePicture = () => {
        console.log('click');
        document.querySelector('#fileSelector').click();

    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file){
            dispatch(startUploading(file));
        }
    }
    return (
        <div className="notes__appbar">
            <span>{noteDate.format('MMMM Do YYYY')}</span>
            <input id='fileSelector' type='file' style={{display: 'none'}} onChange={handleFileChange}/>
            <div>
                <button className="btn" onClick={handleSavePicture}>
                    Picture
                </button>
                <button className="btn" onClick={handleSaveNote}>
                    Save
                </button>
            </div>
            
        </div>
    )
}
