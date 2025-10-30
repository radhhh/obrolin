export async function generateRecommendation(keywordList){
    try{
        const response = await fetch("/api/recommend", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(keywordList)
        });
        if(!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }
        const result = await response.json();
        return result;
    }
    catch (err) {
        console.error(err.message);
        return [];
    }
}

export async function askQuestion(questionID){
    try{
        const response = await fetch(`/api/answer?questionID=${questionID}`);
        if(!response.ok) {
            throw new Error(`Response status ${response.status}`);
        }
        const result = await response.json();
        return result.answer;
    }
    catch(err){
        console.error(err.message);
        return "Error :( Silakan coba lagi."
    }
}