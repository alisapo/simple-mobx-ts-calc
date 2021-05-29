import { observable, action, makeObservable } from 'mobx';


class CalculatorStore {
  result: string = ""
  calculations: string = ""

  constructor() {
    makeObservable(this, {
      result: observable,
      calculations: observable,
      addValue: action,
    })
  }

  addValue(value: string) {
    
  }

  calculate = () => {
    try {
      this.result = (eval(this.calculations) || "") + "";
    } catch (error) {
      this.result = "error";
    }
  }

};

export default CalculatorStore;
