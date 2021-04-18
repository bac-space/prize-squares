<template>
  <div class="playfield">
    <game-board :prizes="prizes" :gridsize="gridsize"></game-board>
    <prize-panel @shuffle-pieces="shufflePrizes"></prize-panel>
  </div>
</template>

<script>
import { onMounted, ref } from "vue";
import GameBoard from "../board/GameBoard.vue";
import PrizePanel from "../prize/PrizePanel.vue";

export default {
  name: "PlayField",
  components: {
    GameBoard,
    PrizePanel,
  },
  setup() {
    const gridsize = 25;
    const prizes = ref([]);

    const initPrizes = () => {
      const prize50 = new Array(12).fill("$50");
      const prize100 = new Array(4).fill("$100");
      const prize50plus = new Array(3).fill("$50 + Pick");
      const prize100plus = new Array(2).fill("$100 + Pick");
      const prizespecial = ["#2", "#3", "#4", "#5"];
      prizes.value = [
        ...prize50,
        ...prize100,
        ...prize50plus,
        ...prize100plus,
        ...prizespecial,
      ];
    };

    const shufflePrizes = () => {
      console.log(`ShufflePrizes Triggered`);
      const randomidx = new Set();
      let idx = null;
      const holder = [];

      while (randomidx.size < gridsize) {
        idx = Math.floor(Math.random() * 25);
        randomidx.add(idx);
      }

      randomidx.forEach((index) => {
        holder.push(prizes.value[index]);
      });

      prizes.value = holder;
    };

    onMounted(() => {
      initPrizes();
      shufflePrizes();
    });

    return {
      gridsize,
      prizes,
      shufflePrizes,
    };
  },
};
</script>

<style scoped>
.playfield {
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
  width: 80%;
}
</style>
