const OpenAI = require('openai');
const { zodTextFormat } = require('openai/helpers/zod.js');
const client = new OpenAI();
const { z } = require('zod');

const gptModel = "gpt-5";

const recommendationSchema = z.object({ questions: z.array(z.string()) });

async function getQuestions(transcript, keywords) {
    const response = await client.responses.create({
        model: gptModel,
        input: [
            ...transcript,
            {
                role: "developer",
                content: "User akan memberikan kata kunci yang dipisahkan oleh koma, \
                kamu harus memberikan list 5 pertanyaan yang relevan dengan kata kunci tersebut tanpa kata pengantar. \
                Pertanyaan harus dibuat sederhana, sedekat mungkin dengan kata kunci, dengan sesedikit mungkin kata. \
                Kata kunci bisa memiliki kesalahan penulisan dan kamu harus mengantisipasinya! \
                Pertanyaan mungkin berkaitan dengan percakapan sebelumnya"
            },
            {
                role: "user",
                content: keywords.join(',')
            }
        ],
        text: {
            format: zodTextFormat(recommendationSchema, "gatau")
        }
    });
    return JSON.parse(response.output_text).questions;
}

async function getAnswer(question, transcript) {
    const response = await client.responses.create({
        model: gptModel,
        input: [
            ...transcript,
            {
                role: "system", 
                content: "User akan memberikan pertanyaan. Kamu harus memberikan jawaban sesingkat dan sejelas mungkin seperti menjelaskan kepada anak kecil!"
            },
            {
                role: "user", 
                content: `${question}`
            }
        ]
    });
    return response.output_text;
}

module.exports = { getQuestions, getAnswer };