<template>
  <h1 class="heading">Prize Squares</h1>
</template>

<style scoped>
.heading {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 7rem;
  letter-spacing: 1.2rem;
  text-transform: uppercase;
  padding-top: 2.5rem;
  color: var(--header-text-color);
  transition: animation 1s ease;
}

.heading:hover {
  animation-duration: 0.2s;
  animation-name: shine;
  animation-iteration-count: infinite;
}

@keyframes shine {
  0% {
    background-color: var(--header-text-color);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  10% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #ffed59 4%,
      #ffeb26 8%,
      #ffea00 11%,
      #ffeb26 14%,
      #ffed59 18%,
      #fff099 26%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  15% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #ffed59 8%,
      #ffeb26 12%,
      #ffea00 15%,
      #ffeb26 18%,
      #ffed59 22%,
      #fff099 30%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  25% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #fff099 10%,
      #ffed59 18%,
      #ffeb26 22%,
      #ffea00 25%,
      #ffeb26 28%,
      #ffed59 32%,
      #fff099 40%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  35% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #fff099 20%,
      #ffed59 28%,
      #ffeb26 32%,
      #ffea00 35%,
      #ffeb26 38%,
      #ffed59 42%,
      #fff099 50%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  45% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #fff099 30%,
      #ffed59 38%,
      #ffeb26 42%,
      #ffea00 45%,
      #ffeb26 48%,
      #ffed59 52%,
      #fff099 60%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  55% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #fff099 40%,
      #ffed59 48%,
      #ffeb26 52%,
      #ffea00 55%,
      #ffeb26 58%,
      #ffed59 62%,
      #fff099 70%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  65% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #fff099 50%,
      #ffed59 58%,
      #ffeb26 62%,
      #ffea00 65%,
      #ffeb26 68%,
      #ffed59 72%,
      #fff099 80%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  75% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #fff099 60%,
      #ffed59 68%,
      #ffeb26 72%,
      #ffea00 75%,
      #ffeb26 78%,
      #ffed59 82%,
      #fff099 90%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  85% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #fff099 70%,
      #ffed59 78%,
      #ffeb26 82%,
      #ffea00 85%,
      #ffeb26 88%,
      #ffed59 92%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  90% {
    background: linear-gradient(
      135deg,
      #fff099 0%,
      #fff099 74%,
      #ffed59 82%,
      #ffeb26 88%,
      #ffea00 89%,
      #ffeb26 92%,
      #ffed59 96%,
      #fff099 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
  100% {
    background-color: var(--header-text-color);
    background-clip: text;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -moz-text-fill-color: transparent;
    -webkit-text-fill-color: transparent;
    display: inline-block;
  }
}
</style>
