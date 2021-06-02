<template>
  <div class="prize__panel">
    <div class="prize__area">
      <h2>Special Prizes</h2>
      <div class="prize__item--special">
        <h3 class="prize__header--special">Special Prize #5</h3>
        <textarea
          class="prize__description--special"
          name="special5"
          id="pr5"
          placeholder="Special Prize #5"
        >
        </textarea>
      </div>
      <div class="prize__item--special">
        <h3 class="prize__header--special">Special Prize #4</h3>
        <textarea
          class="prize__description--special"
          name="special4"
          id="pr4"
          placeholder="Special Prize #4"
        >
        </textarea>
      </div>
      <div class="prize__item--special">
        <h3 class="prize__header--special">Special Prize #3</h3>
        <textarea
          class="prize__description--special"
          name="special3"
          id="pr3"
          placeholder="Special Prize #3"
        >
        </textarea>
      </div>
      <div class="prize__item--special">
        <h3 class="prize__header--special">Special Prize #2</h3>
        <textarea
          class="prize__description--special"
          name="special2"
          id="pr2"
          placeholder="Special Prize #2"
        >
        </textarea>
      </div>
      <h2>Standard Prizes</h2>
      <div class="prize__item--standard">
        <p class="prize__amount--standard"><span>$400</span></p>
        <p class="prize__quantity--standard"><span>1</span></p>
      </div>
      <div class="prize__item--standard">
        <p class="prize__amount--standard"><span>$300</span></p>
        <p class="prize__quantity--standard"><span>1</span></p>
      </div>
      <div class="prize__item--standard">
        <p class="prize__amount--standard"><span>$200</span></p>
        <p class="prize__quantity--standard"><span>1</span></p>
      </div>
      <div class="prize__item--standard">
        <p class="prize__amount--standard"><span>$100 plus Free Pick</span></p>
        <p class="prize__quantity--standard"><span>2</span></p>
      </div>
      <div class="prize__item--standard">
        <p class="prize__amount--standard"><span>$100</span></p>
        <p class="prize__quantity--standard"><span>4</span></p>
      </div>
      <div class="prize__item--standard">
        <p class="prize__amount--standard"><span>$50 plus Free Pick</span></p>
        <p class="prize__quantity--standard"><span>3</span></p>
      </div>
      <div class="prize__item--standard">
        <p class="prize__amount--standard"><span>$50</span></p>
        <p class="prize__quantity--standard"><span>9</span></p>
      </div>
    </div>
    <div class="control__area">
      <base-button class="control__area-button" @click="$emit('shuffle-pieces')"
        >Randomize Prizes</base-button
      >
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  emits: ["shuffle-pieces"],
  name: "PrizePanel",
  setup() {
    return {};
  },
};
</script>

<style scoped>
h2 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 3rem;
  padding-top: 2rem;
  text-align: center;
}

h3 {
  font-family: "Roboto", sans-serif;
  font-weight: 700;
  font-size: 2rem;
  padding-top: 1rem;
}

.prize__panel {
  flex: 1 1 auto;
  background-color: var(--prizepanel-bkg-dk-color);
  color: var(--main-text-color-alt);
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
}

.prize__area {
  margin-bottom: 1.5rem;
  margin-left: 1rem;
}

.prize__header--special {
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
}

.prize__description--special {
  resize: none;
  outline: none;
  border: none;
  background-color: var(--prizepanel-bkg-dk-color);
  width: 95%;
  height: 5rem;
}

.prize__description--special:focus {
  background-color: var(--prizepanel-bkg-lt-color);
  outline: 3px solid var(--prizepanel-bkg-lt-color);
}

.prize__description--special:hover {
  background-color: var(--prizepanel-bkg-lt-color);
  outline: 3px solid var(--prizepanel-bkg-lt-color);
}

.prize__item--standard {
  display: flex;
  flex-flow: row nowrap;
  font-size: 2rem;
  font-weight: bold;
}

.prize__item--standard span {
  display: inline-block;
  margin-top: 0.8rem;
}

.prize__amount--standard {
  flex: 2 2 0;
}

.prize__quantity--standard {
  flex: 1 1 0;
  text-align: center;
}

.prize__quantity--standard span {
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.5rem;
  background-color: var(--prizepanel-bkg-lt-color);
}

.control__area {
  display: flex;
  justify-content: center;
  padding-top: 1.7rem;
  padding-bottom: 1rem;
}
.control__area-button {
  box-shadow: 0 2rem 6rem rgba(0, 0, 0, 0.3);
  transition: 0.2s all;
}

.control__area-button:hover {
  background-color: var(--btn-dark-color);
}

.control__area-button:active {
  transform: scale(0.98);
  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.3);
}
</style>
