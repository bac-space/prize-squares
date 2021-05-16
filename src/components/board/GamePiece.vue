<template>
  <div
    class="gamepiece"
    :class="{
      'gamepiece--selected': isSelected,
      'gamepiece--passed': isPassed,
    }"
  >
    <div class="northeast">
      <span class="eyeball" @click="revelPrize">
        <font-awesome-icon :icon="['fas', 'eye-slash']" v-if="!isSelected" />
        <font-awesome-icon :icon="['fas', 'eye']" v-else />
      </span>
    </div>
    <div class="north">
      <span class="selectPrize" @click="selectSquare"
        ><font-awesome-icon :icon="['fas', 'gift']"
      /></span>
    </div>
    <div class="northwest">
      <h3 class="squareId">{{ squareId }}</h3>
    </div>
    <div class="south">
      <h2 class="prizevalue" :class="[isPrizeHidden ? 'prize--hide' : '']">
        {{ prize }}
      </h2>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "GamePiece",

  props: ["squareId", "prize"],
  setup() {
    const isSelected = ref(false);
    const isPassed = ref(false);
    const isPrizeHidden = ref(true);

    function selectSquare() {
      if (isSelected.value === false && isPassed.value === false) {
        isSelected.value = true;
        return;
      }

      if (isSelected.value === true && isPassed.value === false) {
        isPassed.value = true;
        return;
      }

      isSelected.value = false;
      isPassed.value = false;
      isPrizeHidden.value = true;
      return;
    }

    function revelPrize() {
      if (isSelected.value === true) {
        isPrizeHidden.value = !isPrizeHidden.value;
      }
    }

    return {
      selectSquare,
      revelPrize,
      isSelected,
      isPassed,
      isPrizeHidden,
    };
  },
};
</script>

<style scoped>
.gamepiece {
  background-color: var(--piece-bkg-color);
  color: var(--main-text-color-alt);
  border-radius: 0.5rem;
  display: grid;
  grid-template-rows: 5rem 6rem;
  grid-template-columns: 3fr 1fr 1fr;
  grid-template-areas:
    "nw no ne"
    "so so so";
}

.gamepiece--selected {
  background-color: var(--piece-bkg-active-color);
}

.gamepiece--passed {
  background-color: var(--piece-bkg-passed-color);
}

.northeast {
  grid-area: ne;
  display: flex;
  justify-content: center;
  padding-top: 1.2rem;
  padding-right: 1.2rem;
}

.northeast .eyeball {
  font-size: 1.8rem;
  cursor: pointer;
}

.north {
  grid-area: no;
  display: flex;
  justify-content: center;
  padding-top: 1.2rem;
  padding-left: 0.6rem;
  padding-right: 0.6rem;
}

.north .selectPrize {
  font-size: 1.8rem;
  cursor: pointer;
}

.northwest {
  grid-area: nw;
  display: flex;
  justify-content: left;
  padding-top: 1.2rem;
  padding-left: 1.2rem;
}

.northwest h3 {
  font-size: 2rem;
  line-height: 2.2rem;
}

.south {
  grid-area: so;
  display: flex;
  align-items: top;
  justify-content: center;
  height: 4rem;
}

.south h2 {
  font-size: 3rem;
}

.prize--hide {
  transform: scale(0);
}

.eyeball {
  font-size: 1.7rem;
}
</style>
