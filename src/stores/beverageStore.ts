import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";
import { BeverageType, BaseBeverageType, CreamerType, SyrupType } from "../types/beverage.ts";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    baseList: bases,
    creamList: creamers,
    syrupList: syrups,
    currentTemp: tempretures[0],
    curBase: bases[1],
    curCreamer: creamers[1],
    curSyrup: syrups[1],
    currentName: '',
    recipes: [] as BeverageType[],
    currentRecipe: null,
  }),


  actions: {
    makeBeverage(newName: string, newTemp: string, newBase: BaseBeverageType, newCream: CreamerType, newSyrup: SyrupType) {
      const newBev: BeverageType = {
        id: `${newBase.id}-${newSyrup.id}-${newCream.id}`,
        name: newName,
        temp: newTemp,
        base: newBase,
        creamer: newCream,
        syrup: newSyrup,
      }
      this.$patch((state) => {
        state.recipes.push(newBev);
      });
    },
    showBeverage(curRecipe: BeverageType) {
      this.$patch((state) => {
        state.curBase = curRecipe.base,
        state.curCreamer = curRecipe.creamer,
        state.curSyrup = curRecipe.syrup,
        state.currentTemp = curRecipe.temp
      });
    },
  },
  persist: true,
});

//beverageStore.makeBeverage(currentName, currentTemp, curBase, curCreamer, curSyrup)