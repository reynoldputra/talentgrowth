import { plainToClass } from "class-transformer"
import express from "express"
import { ContactDTO } from "./dto/contactDto.ts"
import { validate } from "class-validator"
import prisma from "./prisma/prisma.ts"

const app = express()
const port = process.env.PORT

app.use(express.json())

app.get("/", (_, res) => {
  res.send("hello wolrd")
})

app.post("/contact", async (req, res) => {
  try {
    const body = req.body ? req.body : {}
    if(body.numberPhone) body.numberPhone = body.numberPhone.toString()
    const contactDTO = plainToClass(ContactDTO, body)
    const error = await validate(contactDTO)
    if(error.length > 0) res.status(400).json({
      status : false,
      message : "Invalid input",
      data : error
    })

    await prisma.contact.create({
      data : contactDTO
    })

    res.status(201).json({
      status : true,
      message : "Success create new contact"
    })

  } catch (err) {
    console.log(err)
    res.status(500).json("Internal server error")
  }
})

app.get("/contact", async (_, res) => {
  try {
    const result = await prisma.contact.findMany()
    res.status(200).json({
      status : true,
      data : result
    })
  } catch (err) {
    console.log(err)
    res.status(500).json("Internal server error")
  }
})


app.put("/contact/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const body = req.body ? req.body : {}
    if(body.numberPhone) body.numberPhone = body.numberPhone.toString()
    const contactDTO = plainToClass(ContactDTO, body)
    const error = await validate(contactDTO)
    if(error.length > 0) res.status(400).json({
      status : false,
      message : "Invalid input",
      data : error
    })

    const contact = await prisma.contact.findFirst({
      where : {
        id
      }
    })

    if(!contact) res.status(400).json({
      status : false,
      message : "Contact not found"
    })

    console.log(contactDTO)
    
    await prisma.contact.update({
      where : {
        id
      },
      data : contactDTO
    })

    res.status(201).json({
      status : true,
      message : "Success update contact"
    })
  } catch (err) {
    console.log(err)
    res.status(500).json("Internal server error")
  }
})

app.delete("/contact/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const contact = await prisma.contact.findFirst({
      where : {
        id
      }
    })

    if(!contact) res.status(400).json({
      status : false,
      message : "Contact not found"
    })
    
    await prisma.contact.delete({
      where : {
        id
      }
    })

    res.status(201).json({
      status : true,
      message : "Success delete contact"
    })
  } catch (err) {
    console.log(err)
    res.status(500).json("Internal server error")
  }
})
app.listen(port, () => {
  console.log("Listening to port", port)
})
