import React, {useEffect, useState} from 'react';
import styled from "styled-components";

import {movieAPI} from "../api"

const Container = styled.div`
  padding: 40px 30px;
  margin-bottom: 50px;
  margin-left: 50px;
`
const Title = styled.h1`
  font-size: 50;
  font-weight: 500;
`

// const Grid = styled.div`
//   margin-top: 25px;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, 300px);
//   grid-gap: 25px;
// `

const HomeScreen = () => {
    const [upcomings, setUpcomings] = useState([])
    const [topRates, setRates] = useState([])
    const [nowPlaying, setNowPlaying] = useState([])
    const [loading, setLoading] = useState(true)

    // const [movies, setMovies] = useState({
    //     nowPlaying: [],
    //     topRated: [],
    //     upComing: [],
    //     loading: true
    // })


    // const getUpcoming = async () => {
    //     return(
    //         await axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=c9349dd29b0c396b729d9fc6016daf67&language=en-US&page=1')
    //             // .then(aaa => console.log(aaa.data.results))
    //             .then(aaa => {
    //                 setUpcomings(aaa.data.results)
    //                 setLoading(false)
    //             })
    //
    //             .catch(err => console.log(err))
    //     )
    // }
    //
    // const getRate = async () => {
    //     return(
    //         await axios.get('https://api.themoviedb.org/3/movie/top_rated?api_key=c9349dd29b0c396b729d9fc6016daf67&language=en-US&page=1')
    //             // .then(bbb => console.log(bbb.data.results))
    //             .then(bbb => {
    //                 setRates(bbb.data.results)
    //                 setLoading(false)
    //             })
    //             .catch(err => console.log(err))
    //     )
    // }

    const getMovies = async () => {
       const [nowPlaying, nowPlayingError] = await movieAPI.nowPlaying()

        const [upComing, upComingError] = await movieAPI.upComing()

        const [topRated, topRatedError] = await movieAPI.topRated()

        setUpcomings(upComing)
        setRates(topRated)
        setNowPlaying(nowPlaying)
        setLoading(false)



        // setMovies({
        //     nowPlaying: nowPlaying,
        //     topRated: topRated,
        //     upComing: upComing,
        //     loading: false
        // })

        console.log(nowPlaying.length)

    }


    useEffect(() => {
        // getUpcoming()
        // getRate()
        getMovies()
    },[])

    return (
        <Container>
            {loading ?
                <div>
                    <h1>
                        loading ...
                    </h1>
                </div>
            :  (
                <>
                    <div>
                        <Title> 업커밍 </Title>

                        {upcomings.map(movie => (
                            <h1>{movie.title}</h1>
                        ))}

                    </div>
                    <div>
                        <Title> 트렌드 </Title>
                        {topRates.map(movie => (
                            <h1>{movie.title}</h1>
                        ))}

                    </div>
                    <div>
                        <Title> 업커밍 </Title>
                        {upcomings.map(movie => (
                            <h1>{movie.title}</h1>
                        ))}

                    </div>


                </>


                )
            }
        </Container>

    );
};

export default HomeScreen;
