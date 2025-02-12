export const calculateWordCount = (durationInSeconds: number) => {
    const wordsPerSecond = 2.5;
    return Math.round(durationInSeconds * wordsPerSecond);
  };
  
export const generateScript = async (wordCount: number) => {
// Simulate script generation (connect to OpenAI here)
let script = "Once upon a time... ";
for (let i = 0; i < wordCount - 10; i++) {
    script += "word ";
}
return script.trim();
};