<template>
  <div class="board">
    <game-piece
      v-for="g in gridsize"
      :key="g"
      :squareId="g"
      :prize="prizes[g - 1]"
    ></game-piece>
  </div>
</template>

<script>
import GamePiece from "./GamePiece.vue";
export default {
  components: { GamePiece },
  name: "GameBoard",
  props: ["prizes", "gridsize"],
  setup() {},
};
</script>

<style scoped>
.board {
  flex: 2 1 auto;
  border-radius: 0.5rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
}
</style>
