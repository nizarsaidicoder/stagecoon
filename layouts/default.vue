<template>
  <div>
    <!-- <div class="blob">
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 350">
        <path
          d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
      </svg>
    </div>
    <div class="blob blob-1">
      <svg
        xmlns:xlink="http://www.w3.org/1999/xlink"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 310 350">
        <path
          d="M156.4,339.5c31.8-2.5,59.4-26.8,80.2-48.5c28.3-29.5,40.5-47,56.1-85.1c14-34.3,20.7-75.6,2.3-111  c-18.1-34.8-55.7-58-90.4-72.3c-11.7-4.8-24.1-8.8-36.8-11.5l-0.9-0.9l-0.6,0.6c-27.7-5.8-56.6-6-82.4,3c-38.8,13.6-64,48.8-66.8,90.3c-3,43.9,17.8,88.3,33.7,128.8c5.3,13.5,10.4,27.1,14.9,40.9C77.5,309.9,111,343,156.4,339.5z" />
      </svg>
    </div> -->
    <NavigationBar />
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style>
  .blob {
    position: absolute;
    top: 0;
    left: 0;
    fill: #023f92;
    width: 10rem;
    z-index: -1;
    animation: move 10s ease-in-out infinite;
    transform-origin: 50% 50%;
    filter: blur(100px) drop-shadow(0 0 200px #0d66e2);
  }
  .blob-1 {
    fill: #920202;
    z-index: -1;
    animation: reverse move 20s ease infinite;
    filter: blur(100px) drop-shadow(0 0 200px #e20d0d);
  }
  @keyframes move {
    0% {
      transform: scale(1) translate(10px, -30px);
    }
    38% {
      transform: scale(0.8, 1) translate(50rem, 20rem) rotate(80deg);
    }
    40% {
      transform: scale(0.8, 1) translate(50rem, 20rem) rotate(80deg);
    }
    78% {
      transform: scale(1.3) translate(0vw, 20rem) rotate(-20deg);
    }
    80% {
      transform: scale(1.3) translate(0vw, 20rem) rotate(-20deg);
    }
    100% {
      transform: scale(1) translate(10px, -30px);
    }
  }
</style>
