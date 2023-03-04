import { date } from 'zod'
import { prisma } from '../config/db'
import { Request, Response } from 'express'


export const createUMS = async (req:Request, res:Response)=>{
    try{
        const UMS = req.body
        await prisma.uMS.create({
            data: UMS
        })
        res.json('user created!')
    }catch(e){
        console.log(e)
    }
}

export const getAllUMS = async (req:Request, res:Response)=>{
    try{
        const getUser = await prisma.uMS.findMany({
            select:{
                username: true,
                password: true,
                email: true,
                role: true,
                joiningYear: true,
                age: true
    
            }
        })
        res.json(getUser)
    }catch(e){
        console.log(e)
    }
}

export const getUMSById = async (req:Request, res:Response)=>{
    try{
    const UMS_id = req.params.id
   const UMS = await prisma.uMS.findFirst({
         where:{
           id: UMS_id 
         }
    })
    res.json(UMS)
    }catch(e){
        console.log(e)
    }
}

export const getUMSByEmail = async (req:Request, res:Response)=>{
    try{
     const UMS_email = req.body.email
     const UMS = await prisma.uMS.findFirst({
        where:{
            email: UMS_email
        }

     })
     if(!UMS){
         res.json('not user funde')
    }else{
        res.json(UMS)
     }
    }catch(e){
        console.log(e)
    }
}
export const getUMSByAge = async (req:Request, res:Response)=>{
    try{
        
     const UMS_eage = req.body.age
     
     const UMS = await prisma.uMS.findMany({
        where:{
            
            age:{
                gt: UMS_eage
               }  
        }

     })
     if(!UMS){
         res.json('not user funde')
    }else{
        res.json(UMS)
     }
    }catch(e){
        console.log(e)
    }
}
export const getUMSByRple = async (req:Request, res:Response)=>{
    try{
        
     const UMS_role = req.body.role
     
     const UMS = await prisma.uMS.findMany({
        where:{
            role: UMS_role
        }

     })
     if(!UMS){
         res.json('not user funde')
    }else{
        res.json(UMS)
     }
    }catch(e){
        console.log(e)
    }
}
export const checkPassAndEmil = async (req:Request, res:Response)=>{
    try{
        
     const {username, password} = req.body
     
     const UMS = await prisma.uMS.findFirst({
        where:{
            username,
            password
        }


     })
     if(!UMS){
         res.json('the Email or Password is incorrect')
    }else{
        res.json(UMS)
     }
    }catch(e){
        console.log(e)
    }
}
export const updatePass = async (req:Request, res:Response)=>{
    try{
        
     const  {id} = req.params
     let newPass = req.body
     const UMS = await prisma.uMS.update({
        where:{
            id: id
        },
        data: newPass
     })
     if(UMS){
         res.json('user updated!')
    }else{
        res.json(UMS)
     }
    }catch(e){
        console.log(e)
    }
}

export const JYear = async (req:Request, res:Response)=>{
    try{
        const id = req.params.id
        const JY = req.body.joiningYear
        const getUser = await prisma.uMS.findFirst({
            where:{
                id:id,
                joiningYear: JY
            },
            select:{
             joiningYear: true
            },
        })
       if(!getUser){
           res.json({
               message: `The user has not been regulated this year`
              })

        }else{
            res.json({
                message: `the user join in this year ${getUser}`
               })
        }
       
    }catch(e){
        console.log(e)
    }
}

export const getJy = async (req:Request, res:Response)=>{
    try{
        
     const UMS_JY = req.body.joiningYear
     
     const UMS = await prisma.uMS.findMany({
        where:{
            
            joiningYear:{
                gte: UMS_JY
               }  
        }

     })
     if(!UMS){
         res.json('not user funde')
    }else{
        res.json(UMS)
     }
    }catch(e){
        console.log(e)
    }
}