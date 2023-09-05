const APIKEY = "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";

const response1 = [
    "Ini pertanyaan 1",
    "Ini pertanyaan 2",
    "Ini pertanyaan 3",
    "Ini pertanyaan 4",
    "Ini pertanyaan 5",
];

const response2 = [
    "Ini pertanyaan refreshed 1",
    "Ini pertanyaan refreshed 2",
    "Ini pertanyaan refreshed 3",
    "Ini pertanyaan refreshed 4",
    "Ini pertanyaan refreshed 5",
]

async function getMessage(message){
    const options = {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${APIKEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: message,
        }),
    };
    const response = await fetch('https://api.openai.com/v1/chat/completions', options);
    const data = await response.json();
    console.log("Total token",data.usage.total_tokens);
    return data["choices"][0]["message"]["content"];
}

export async function demo(){
    let result = await getMessage([
        {role: "user", content: "Hai GPT!"}
    ]);
    console.log(result);
}

export async function generateRecommendation(keywordList){
    for(let i = 0; i < 5; i++){
        try{
            const response = await getMessage([
                {role: "system", content: "Chat ini dalam bahasa Indonesia. User akan memberikan\
                kata kunci yang dipisahkan oleh koma, kamu harus memberikan list 5 pertanyaan\
                yang relevan dengan kata kunci tersebut tanpa kata pengantar"},
                {role: "user", content: keywordList.join(', ')},
            ])
            const finalResponse = response.split(/\n/)
                                        .filter((line) => /^\d$/.test(line[0]))
                                        .map((line) => line.slice(3));
            return finalResponse;
        }
        catch{
            console.log("Failed, trying...");
        }
    }
    return undefined;
}

export async function refreshRecommendation(){
    if(currentQuestion === undefined) return undefined;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            currentQuestion = response2;
            resolve(currentQuestion);
        }, 1000)
    })
}