import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import bases from "../data/bases.json";
import creamers from "../data/creamers.json";
import syrups from "../data/syrups.json";

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
  }),


  actions: {
    setBase(newBase: any) {
      this.curBase = newBase;
    },
    makeBeverage() {},
    showBeverage() {},
  },
  persist: true,
});
