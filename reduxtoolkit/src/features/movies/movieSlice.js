import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import MovieApi from "../../common/MovieApi/MovieApi";
import { APIKey } from "../../common/MovieApi/MovieApiKey";


export const fetchAsyncMovies = createAsyncThunk(
    "movies/fetchAsyncMovies",
     async () =>{
            try {
              const movieText = "Harry"
              const response = await MovieApi.get(`?apikey=${APIKey}&s=${movieText}&type=movie`);
              return response.data;

            } catch (error) {
              console.log(error);
            }

    }

)

export const fetchAsyncShows= createAsyncThunk(
    "movies/fetchAsyncShows",
    async () =>{
      const seriesText = "Friends";
      const response =  await MovieApi.get(`?apikey=${APIKey}&s=${seriesText}&type=series`);
      return response.data;

    }
)

export const fetchAsyncMovieById = createAsyncThunk(
    'movies/fetchAsyncMovieById',
    async(id)=>{

        const response = await MovieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
        return response.data;

    }
)
const initialState = {
    movies:{},
    shows:{},
    selectedItem:{},
}

const movieSlice = createSlice({
    name:"movies",
    initialState,
    reducers:{
        addMovies:(state,{payload})=>{

            state.movies = payload

        },
        deleteMovieById:(state)=>{

            state.selectedItem={}

        }
    },
    extraReducers:{

        [fetchAsyncMovies.pending]:()=>{
            console.log("pending")

        },
        [fetchAsyncMovies.fulfilled]: (state,{payload})=>{
            console.log("fulfilled");
            return {...state,movies:payload}

        },
        [fetchAsyncMovies.rejected]: ()=>{
            console.log("rejected")
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{

            return{...state,shows:payload}

        },
        [fetchAsyncMovieById.fulfilled]:(state,{payload})=>{
            return {...state,selectedItem:payload}

        }

    }
})

export const {addMovies,deleteMovieById} = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows= (state) => state.movies.shows;
export const getMovieOrShowById = (state)=> state.movies.selectedItem;
export default movieSlice.reducer;