import { combineReducers } from 'redux';
const songsListReducer = () => {
    return [
        { title:'Song 1', duration:'1:01' },
        { title:'song 2', duration:'2:02' },
        { title:'song 3', duration:'3:03' },
        { title:'song 4', duration:'4:04' }
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type==='SONG_SELECTED') {
        return action.payload;
    }
    return selectedSong;
};

export default combineReducers({
    songs : songsListReducer,
    selectedSong : selectedSongReducer
});