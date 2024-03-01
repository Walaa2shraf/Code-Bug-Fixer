// const express = require("express");
// const OpenAI = require("openai");
// const app = express();
// app.use(express.json());
// // API key
// const openai = new OpenAI({
//   apiKey: "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",
// });

// // The prompt
// let code = document.getElementById("bug").value;
// let error = document.getElementById("error").value;

// let fixPrompt = `Fix this code:${code}
// Error:
// ${error}.
// Respond only with the fixed code.`;

// let explanation = `Explain the error in this code without fixing it:${code}
// Error:
// ${error} 
// Respond only with the explanation of the Error.`;

// // ===================================================
// // button
// let fixBtn = document.getElementById("fix-btn");
// fixBtn.addEventListener("click", onClick);

// // The functions:
// function onClick() {
//   app.post("https://api.openai.com/v1/chat/completions", async (req, res) => {
//     const prompt = req.body.prompt;
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: prompt + fixPrompt,
//         },
//       ],
//       max_tokens: 100,
//     });
//     res.send(response.choices[0].message.content);
//     const text = prompt.text();
//     const json = JSON.parse(text);
//     fixedCode.innerText = json.code;
//     document.getElementById("fixed").textContent = res.send(
//       response.choices[0].message.content
//     );
//   });

//   app.post("https://api.openai.com/v1/chat/completions", async (req, res) => {
//     const prompt2 = req.body.prompt2;
//     const response = await openai.chat.completions.create({
//       model: "gpt-3.5-turbo",
//       messages: [
//         {
//           role: "user",
//           content: prompt2 + explanation,
//         },
//       ],
//       max_tokens: 100,
//     });
//     res.send(response.choices[0].message.content);
//     const text = prompt2.text();
//     const json = JSON.parse(text);
//     fixedCode.innerText = json.code;
//     document.getElementById("explain").textContent = res.send(
//       response.choices[0].message.content
//     );
//   });
// }
// // how can I do it via (fetch) method not express library ?????!!!!!!!!! 😭😭


