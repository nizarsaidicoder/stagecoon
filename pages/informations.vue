<template>
  <div class="my-4 mx-12">
    <h1 class="text-5xl text-center font-bold">Informations Utiles</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12">
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
        <h2 class="text-3xl font-bold text-primary-500">A propos</h2>
        <p class="mt-4 text-lg">
          Ce site a été créé dans le cadre du projet de fin de la deuxième année
          formation de Réalisation, conception et développement des applications
        </p>
        <p class="mt-4 text-lg">
          Il a pour but de permettre aux étudiants de la formation de consulter
          les ancien stages effectués par les étudiants de la formation
        </p>
      </div>
      <div class="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-4">
        <h2 class="text-3xl font-bold text-primary-500">
          Politique des Stages
        </h2>
        <p class="mt-4 text-lg">
          La politique des stages de l'IUT Robert Schuman respecte les exigences
          de l'Université de Strasbourg et la législation française. Chaque
          stage doit être validé par une convention tripartite signée par toutes
          les parties.
        </p>
        <p class="mt-4 text-lg">
          Les stages doivent permettre aux étudiants de découvrir le milieu
          professionnel et d'acquérir des compétences pratiques. Le suivi par un
          enseignant tuteur est obligatoire pour garantir une expérience
          d'apprentissage optimale.
        </p>
        <h3 class="mt-4">Liens utiles :</h3>
        <ul class="flex flex-col gap-1 mt-2">
          <li>
            <a
              href="https://moodle.unistra.fr/pluginfile.php/1468800/mod_resource/content/1/2016-Politique_des_stages_IUT.pdf"
              target="_blank"
              class="text-primary-500">
              Poltique des stages IUT
            </a>
          </li>
          <li>
            <a
              href="https://moodle.unistra.fr/pluginfile.php/1468801/mod_resource/content/1/2016-Politique_des_stages_Unistra.pdf"
              target="_blank"
              class="text-primary-500">
              Poltique des stages Unistra
            </a>
          </li>
          <li>
            <a
              href="https://alumni.unistra.fr/fr/"
              target="_blank"
              class="text-primary-500">
              Les offres de stages
            </a>
          </li>
          <!-- https://entreprendre.service-public.fr/simulateur/calcul/gratification-stagiaire -->
          <li>
            <a
              href="https://entreprendre.service-public.fr/simulateur/calcul/gratification-stagiaire"
              target="_blank"
              class="text-primary-500">
              Le calcul de la gratification
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
