// import functions from langchain
import { initializeAgentExecutorWithOptions } from "langchain/agents";

import { ChatOpenAI } from "langchain/chat_models/openai";
import { SerpAPI } from "langchain/tools";
import { Calculator } from "langchain/tools/calculator"
import dotenv from "dotenv";
dotenv.config();

// tools calculator, google search
const tools = [new Calculator(), new SerpAPI()];

//build agent, open ai gpt 3.5
const llm = new ChatOpenAI({modelName: "gpt-3.5-turbo", temperature:0});

const executor = await initializeAgentExecutorWithOptions
    (tools,llm, {
        agentType: "openai-functions",
        verbose: true,
    });

// execute promt
const response = await executor.run("please find me 10 recent job postings for AI Engineer, Data Scientist and ML engineer. i have 2 years experice in AI and ML");