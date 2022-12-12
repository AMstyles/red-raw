import './artists.scss';
import { useSelector } from 'react-redux';



function ArtistComponent(props) {
    return (

        <div className="artist">
            <img src={props.artist.picture_small
            } alt="artist" />
            <h3>{props.artist.name}</h3>
        </div>
    )
}

function Artists() {

    let artists = useSelector(state => state.search.artists);


    return (
        <div className="list" >
            <h1>Artist</h1>
            {
                artists.map((artist, index) => {
                    return <ArtistComponent artist={artist} key={index} />
                }
                )

            }


        </div>

    );
}

export default Artists;