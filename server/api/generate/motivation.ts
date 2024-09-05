import Together from "together-ai";
export default defineEventHandler(async (event) => {
  const together = new Together({ apiKey: process.env.TOGETHER_API_KEY });
  // get the request data
  const data = await readBody(event);
  const prompt = `
  Generate a professional French cover letter ('Lettre de Motivation') using the following information:
  Etudiant en deuxieme annee de BUT Informatique, parcours réalisation, conception et developpement des applications; à l'iut de robert schuman
  Période du stage : entre le 15 avril 2025 et le 28 juin 2025 (50 jours ouvrés)
  Durée du stage : au minimum 50 jours ouvrés (maximum 60)
  - Nom de l'eleve: ${data.nom ? data.nom : "Non spécifié"}
  - Prénom de l'eleve: ${data.prenom ? data.prenom : "Non spécifié"}
  - Téléphone de l'eleve: ${data.telephone ? data.telephone : "Non spécifié"}
  - Email de l'eleve: ${data.mail ? data.mail : "Non spécifié"}
  - Adresse de l'eleve: ${data.address ? data.address : "Non spécifié"}
  - Nom de l'entreprise: ${
    data.entrepriseNom ? data.entrepriseNom : "Non spécifié"
  }
  - Email de l'entreprise: ${
    data.entrepriseMail ? data.entrepriseMail : "Non spécifié"
  }
  - Nom du recruteur: ${
    data.entrepriseRecruteur ? data.entrepriseRecruteur : "Non spécifié"
  }
  Ensure the letter is well-structured, polite, and that it gracefully handles any missing information. The cover letter should be formatted appropriately for a job application in France. and do not give anything else beside the letter itself. Just the letter.
  `;

  const completion = await together.chat.completions.create({
    model: "meta-llama/Meta-Llama-3.1-8B-Instruct-Turbo",
    messages: [{ role: "user", content: prompt }],
  });
  return completion.choices[0].message?.content;
});
