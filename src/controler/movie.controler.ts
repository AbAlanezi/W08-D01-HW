import { prisma } from '../config/db'
import { Request, Response } from 'express'

export const getAllMovies = async (req:Request, res:Response)=>{
    try{
        const movie = await prisma.movie.findMany({
            select:{
                name: true,
                rating: true,
                duration: true,
                createdat:true,
                genre: true
            }
        })
        res.json(movie)

    }catch(e){
        console.log(e)
    }
}
export const getMovieByName = async (req:Request, res:Response)=>{
    try{
        const moveName = req.body.name
    const movie = await prisma.movie.findFirst({
        where:{
            name: moveName
            
        }
    })
    if(movie){
        res.json(movie)
    }else{
        res.json('no move funde')
    }
    }catch(e){
        console.log(e)
    }
}
export const getMovieByGenre = async (req:Request, res:Response)=>{
    try{
        const moveGenre = req.body.genre
    const movie = await prisma.movie.findFirst({

        where:{
            genre: moveGenre
            
        }
    })
    if(movie){
        res.json(movie)
    }else{
        res.json('no move funde')
    }
    }catch(e){
        console.log(e)
    }
}

export const getMovieByRating = async (req:Request, res:Response)=>{
    try{
        const moveGenre = req.body.rating
        
    const movie = await prisma.movie.findMany({
        
        where:{

            rating:{
             gt: moveGenre
            }  
            
        }
    })
    if(movie){
        res.json(movie)
    }else{
        res.json('no move funde')
    }
    }catch(e){
        console.log(e)
    }
}

export const createMovie = async (req:Request, res:Response)=>{
    try{
        const movie = req.body
        await prisma.movie.create({
            data:movie
        })
        res.json({
            message: "movie created"
        })
    }catch(e){
        console.log(e)
    }
}

export const updateMovie = async (req:Request, res:Response)=>{
    try{
        let movie = req.body
        const {id} = req.params
         await prisma.movie.update({
            where:{
                id: id
            },
            data:movie
        })
        res.json({
            message: "movie Is updeted"
        })
    }catch(e){
        res.json(e)
    }

}

export const deleteMovie = async (req:Request, res:Response)=>{
    try{
        const {id} = req.params
         await prisma.movie.delete({
            where:{
                id: id
            },
           
        })
        res.json({
            message: "movie Is deleted"
        })
    }catch(e){
        res.json(e)
    }

}