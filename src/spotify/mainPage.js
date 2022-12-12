import Albums from './albums';
import Artists from './artists';
import Songs from './songs';
import { useState, useEffect } from 'react';
import './mainPage.scss'
import { useDispatch, useSelector } from 'react-redux';


const uri = 'https://striveschool-api.herokuapp.com/api/deezer/search?q='

function Spotify() {
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch();


    //TODO: define a function that will be called when the user types in the search box

    function handleOnChnage(e) {
        console.log(e.target.value)
        setSearchQuery(e.target.value)
        search(e.target.value)
    }


    //TODO: define fuctions to update the state of the artists, albums and songs
    function updateArtists(artists) {
        dispatch({ type: 'SEARCH_ARTISTS', payload: artists })
    }

    function updateAlbums(albums) {
        dispatch({ type: 'SEARCH_ALBUMS', payload: albums })
    }

    function updateSongs(songs) {
        dispatch({ type: 'SEARCH_SONGS', payload: songs })
    }

    //TODO: function that handles the network request for the search queery
    async function search(text) {
        const response = await fetch(uri + text)
        const json = await response.json();


        let artists = [];
        let albums = [];

        //getting all the artists and albums
        json.data.forEach(element => {
            artists.push(element.artist)
            albums.push(element.album)

        });


        //getting all the songs
        const songs = await json.data.filter((item) => item.type === 'track');


        //remove dupllicates from albums by id
        albums = albums.filter((album, index, self) =>
            index === self.findIndex((t) => (
                t.id === album.id
            ))
        )

        //remove dupllicates from artists by id
        artists = artists.filter((artist, index, self) =>
            index === self.findIndex((t) => (
                t.id === artist.id
            ))
        )



        console.log(albums)

        updateSongs(songs)
        updateAlbums(albums)
        updateArtists(artists)

    }


    useEffect(() => {
        search('rick astley')
    }, [])

    const nowPlaying = useSelector(state => state.search.nowPlaying)
    console.log(nowPlaying)
    return (

        <div className="spotify">

            <div className="search">

                <div className="fieldComtainer">
                    <input className='searchField' type="text" placeholder="Search" value={searchQuery} onChange={handleOnChnage} />
                </div>



                <div className="nowPlayingContainer">
                    <div className="nowPlaying">

                        <h2>{nowPlaying.title_short}</h2>

                    </div>
                </div>


            </div>

            <div className="contents">
                <Artists />
                <Albums />
                <Songs />
            </div>

        </div>
    )
}

export default Spotify;