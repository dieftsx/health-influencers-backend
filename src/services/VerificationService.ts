import axios from 'axios';
import { Configuration, OpenAIApi } from 'openai';

// Configure a API do OpenAI
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export const verifyHealthClaims = async (claims: string[]) => {
  const verifiedClaims = await Promise.all(claims.map(async (claim) => {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: `Verifique a seguinte alegação de saúde e classifique-a como 'Verificada', 'Questionável' ou 'Desmascarada':\n\n"${claim}"`,
      max_tokens: 100,
    });

    const verificationResult = response.data.choices[0].text.trim();
    return {
      claim,
      verificationResult,
    };
  }));

  return verifiedClaims;
};
