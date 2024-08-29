import Together from "together-ai";
export default defineEventHandler(async (event) => {
  const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });
  // get the request data
  const data = await readBody(event);
  const prompt = `
  Generate a professional French cover letter ('Lettre de Motivation') using the following information:
  Etudiant en deuxieme annee de BUT Informatique à l'iut de robert schuman
  - Nom: ${data.nom ? data.nom : "Non spécifié"}
  - Prénom: ${data.prenom ? data.prenom : "Non spécifié"}
  - Téléphone: ${data.telephone ? data.telephone : "Non spécifié"}
  - Email: ${data.mail ? data.mail : "Non spécifié"}
  - Adresse: ${data.address ? data.address : "Non spécifié"}
  - Nom de l'entreprise: ${
    data.entrepriseNom ? data.entrepriseNom : "Non spécifié"
  }
  - Email de l'entreprise: ${
    data.entrepriseMail ? data.entrepriseMail : "Non spécifié"
  }
  - Nom du recruteur: ${
    data.entrepriseRecruteur ? data.entrepriseRecruteur : "Non spécifié"
  }
  - Titre du stage: ${data.stageTitre ? data.stageTitre : "Non spécifié"}
  - Description du stage: ${
    data.stageDescription ? data.stageDescription : "Non spécifié"
  }

  Ensure the letter is well-structured, polite, and that it gracefully handles any missing information. The cover letter should be formatted appropriately for a job application in France. and do not give anything else beside the letter itself. Just the letter.
  `;

  const completion = await together.chat.completions.create({
    model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return completion.choices[0].message?.content;
});
