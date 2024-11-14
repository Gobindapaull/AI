require("dotenv").config()
const openAI = require("openai")

const openai = new openAI({
    apiKey: process.env.OPENAI_KEY
})

async function generateImage(prompt) {
    try {
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size:'1024x1024'
        })
        console.log(response.data[0].url)
    } catch (error) {
        console.log("error")
    }
}

const prompt = "Best thumbnail of 2024 for programming"
generateImage(prompt)
