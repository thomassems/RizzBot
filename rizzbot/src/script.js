import { config } from "dotenv";
config();

import { Configuration, OpenAIApi} from "openai";

const openai = new OpenAIApi(new Configuration({
    apiKey: process.env.API_KEY
}));

openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello Chat GPT"}]
}).then (response => {
    console.log(response.data.choices[0].message.content);
});