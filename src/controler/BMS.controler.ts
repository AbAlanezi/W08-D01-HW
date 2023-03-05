import { prisma } from '../config/db'
import { Request, Response } from 'express'


export const createBMS = async (req:Request, res:Response)=>{
    try{
        const BMS = req.body
        await prisma.bMS.create({
            data:BMS
        })
        res.json({
            message: "user created!"
        })
    }catch(e){
        console.log(e)
    }
} 

export const getBMS = async (req:Request, res:Response)=>{
    try{
        const BMS = await prisma.bMS.findMany({
          select:{
            username: true,
            password: true
          }  
        })
        res.json(BMS)
    }catch(e){
        console.log(e)
    }
}

export const createBook = async (req:Request, res:Response)=>{
    try{
        const bookD = req.body
        await prisma.books.create({
            data:bookD
        })
        res.json({
            message: "Book created!"
        })
    }catch(e){
        console.log(e)
    }
}

export const getBooks = async (req:Request, res:Response)=>{
    try{
        const BMS = await prisma.books.findMany({
          select:{
            name: true,
            genre: true
          }  
        })
        res.json(BMS)
    }catch(e){
        console.log(e)
    }
}




export const getLoans = async (req:Request, res:Response)=>{
    try{
        const loan = await prisma.loan.findMany({
          select:{
            bmsId: true,
            bookId: true
          }  
        })
        res.json(loan)
    }catch(e){
        console.log(e)
    }
}

export const createLoan = async (req:Request, res:Response)=>{
    try{
        const loan = req.body
   const q = await prisma.loan.create({
            data:loan
        })
        res.json({
            message: "loan created!"
        })
    }catch(e){
        console.log(e)
    }
}

export const getLoan= async (req:Request, res:Response)=>{
    try{
        
     const bmsId = req.body.bmsId
     const bookId = req.body.bookId
     
     const UMS = await prisma.loan.findFirst({
        where:{
            bmsId: bmsId,
            bookId: bookId
        }
     })
    //  res.json(UMS)

     if(!UMS){
         res.json('User Id Is Invalids ')
    }else{
        res.json(UMS)
     }
    }catch(e){
        console.log(e)
    }
}




export const getAllBUserLoanBook = async (req:Request, res:Response)=>{
    try{
     const id = req.body.bookId
     const bookId = await prisma.loan.findMany({
        where:{
            bookId: id
        },
        select:{
            book:true,
            bms:{
                select:{
                    username: true,
                    
                }
            }
        }
     })
     

     if(bookId.length == 0){
      res.json({
        message: 'bmsId is invalid'
      })
    
     }else(
         res.json(bookId)

     )
    }catch(e){
        console.log(e)
    }
}