const codeInput = document.getElementById("bug");
const errorInput = document.getElementById("error");
const fixedCodeOutput = document.getElementById("fixed");
const explanationOutput = document.getElementById("explain");
const fixBtn = document.getElementById("fix-btn");

const apiKey = "AIzaSyDwkiSwymK9Wut4oZGN6RwDzKUc7I1tdGQ";

const GEMINI_API_URL =
  "https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=" +
  apiKey;

fixBtn.addEventListener("click", async () => {
  const code = codeInput.value.trim();
  const error = errorInput.value.trim();

  if (!code || !error) {
    alert("Please write the code and the first error ✨");
    return;
  }

  // Prompt للتصليح
  const fixPrompt = `Fix this code:\n${code}\n\nError:\n${error}\n\nRespond with the fixed code only.`;

  // Prompt للشرح
  const explainPrompt = `Explain the error in this code:\n${code}\n\nError:\n${error}\n\nRespond with the explanation only.`;

  try {
    // تصليح الكود
    const fixRes = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ contents: [{ parts: [{ text: fixPrompt }] }] }),
    });
    const fixData = await fixRes.json();
    fixedCodeOutput.value =
      fixData?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Something went wrong ⚠️";

    // شرح الخطأ
    const explainRes = await fetch(GEMINI_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [{ parts: [{ text: explainPrompt }] }],
      }),
    });
    const explainData = await explainRes.json();
    explanationOutput.value =
      explainData?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "Something went wrong ⚠️";
  } catch (err) {
    console.error(err);
    fixedCodeOutput.value = "There is a problem with the connection.⚠️";
    explanationOutput.value = "There is a problem with the connection.⚠️";
  }
});
