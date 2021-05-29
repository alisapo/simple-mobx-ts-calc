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
    if (value === "=") {
      this.calculate();
    }
    else if (value === "AC") {
      this.reset();
    }
    else if (value === "DEL") {
      this.delSymbol();
    }
    else {
      this.calculations = this.calculations + value;

      if (this.calculations.length > 20) {
        this.calculations = "out of limit";
        setTimeout(() => {
          this.calculations = "";
        }, 1500);
      }
      if (this.result) this.result = "";
    }
  }

  calculate = () => {
    try {
      this.result = (eval(this.calculations) || "") + "";
    } catch (error) {
      this.result = "error";
    }
  }

  reset = () => {
    this.result = "";
    this.calculations = "";
  }

  delSymbol = () => {
    this.calculations = this.calculations.slice(0, -1);
  }
};

export default CalculatorStore;
