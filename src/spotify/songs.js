import './songs.scss';
import { useSelector, useDispatch } from 'react-redux';



function SongsComponent(props) {

    const dispatch = useDispatch();

    function playSong() {
        dispatch({ type: 'PLAY_SONG', payload: props.song })
    }



    return (

        <div className="song" onClick={playSong}>

            <div className='songInfo'>
                <img className='songImage' src={props.song.album.cover_small
                } alt="song" />
                <div className='songInfoText'>
                    <h3>{props.song.title}</h3>
                    <p>{props.song.artist.name}</p>
                </div>

            </div>

        </div>

    )

}

function Songs() {

    let songs = useSelector(state => state.search.songs);

    return (
        <div className="list" >
            <h1>Songs</h1>
            {songs.map((song, index) => {
                return <SongsComponent song={song} key={index} />
            }
            )}

        </div>


    );
}

export default Songs;