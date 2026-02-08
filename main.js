"use strict";
class TipCalculator {
  constructor() {
    this.btnReset = document.getElementById("reset");
    this.inputNums = document.querySelectorAll(".val-input");
    this.allInputs = document.querySelectorAll("input");
    this.allTipBtns = document.querySelectorAll(".tips");
    this.inputPeople = document.getElementById("num-people");

    // values
    this.valueBill = document.getElementById("bill");
    this.valueCustom = document.getElementById("custom");
    this.tipPerPerson = document.getElementById("tip-person");
    this.tipTotal = document.getElementById("tip-total");
    this.currentTip = 0;
  }

  init() {
    this.handleReset();
    this.handleTipBillField();
    this.handleTipBtns();
    this.handleTipCustomField();
    this.handleTipPplField();
    this.handleValidation();
  }

  //   addErrorClass = (input) => {
  //     input
  //       .closest(".input-section")
  //       .querySelector("span")
  //       .classList.add("error");
  //   };
  //   removeErrorClass = (input) => {
  //     input
  //       .closest(".input-section")
  //       .querySelector("span")
  //       .classList.remove("hidden");
  //   };
  addErrorMsg = (input) => {
    // this.addErrorClass(input);
    input
      .closest(".input-section")
      .querySelector("span")
      .classList.add("error");
    // this.removeErrorClass(input);
    input
      .closest(".input-section")
      .querySelector("span")
      .classList.remove("hidden");
  };

  removeErrorMsg = (input) => {
    // this.removeErrorClass(input);
    // this.addErrorClass(input);
    input
      .closest(".input-section")
      .querySelector("span")
      .classList.remove("error");

    input
      .closest(".input-section")
      .querySelector("span")
      .classList.add("hidden");
  };

  numValidation = (input) => {
    if (input.value < 1 && input.value !== "") {
      input.classList.add("input-error");
      this.addErrorMsg(input);
    } else {
      input.classList.remove("input-error");
      this.removeErrorMsg(input);
    }
  };

  tipCalcPerson = (tip) =>
    Number(
      (
        (this.valueBill.value * (tip / 100)) /
        Math.floor(this.inputPeople.value)
      ).toFixed(2),
    );

  tipCalcTotal = (tipValue) => {
    if (this.inputPeople.value >= 1 && this.valueBill.value >= 1) {
      const tip = this.tipCalcPerson(tipValue);
      this.tipPerPerson.textContent = `$${tip.toFixed(2)}`;
      this.tipTotal.textContent = `$${(Number(this.valueBill.value) / Math.floor(this.inputPeople.value) + Number(tip)).toFixed(2)}`;
    }
  };

  clearSelectedBtn = () => {
    document
      .querySelectorAll(".tips .btn")
      .forEach((btn) => btn.classList.remove("selected"));
  };

  handleReset() {
    this.btnReset.addEventListener("click", (e) => {
      e.preventDefault();
      this.clearSelectedBtn();
      this.allInputs.forEach((item) => {
        item.value = "";
      });

      this.inputNums.forEach((item) => {
        this.numValidation(item);
      });

      this.tipPerPerson.textContent = "$0.00";
      this.tipTotal.textContent = "$0.00";
      this.currentTip = 0;
    });
  }

  handleValidation() {
    this.inputNums.forEach((item) => {
      item.addEventListener("input", (e) => {
        const id = e.target.getAttribute("id");
        const locator = document.getElementById(id);
        this.numValidation(locator);
      });
    });
  }

  handleTipBtns() {
    this.allTipBtns.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.clearSelectedBtn();
        this.valueCustom.value = "";

        const dataValue = e.target.getAttribute("data-value");
        if (dataValue) {
          e.target.classList.add("selected");
          this.tipCalcTotal(Number(dataValue));
          this.currentTip = Number(dataValue);
        }
      });
    });
  }

  handleTipCustomField() {
    this.valueCustom.addEventListener("input", () => {
      const customTip = Math.abs(this.valueCustom.value);
      this.currentTip = customTip;
      this.tipCalcTotal(customTip);
    });
  }

  handleTipPplField() {
    this.inputPeople.addEventListener("input", () => {
      this.tipCalcTotal(this.currentTip);
    });
  }

  handleTipBillField() {
    this.valueBill.addEventListener("input", () => {
      this.tipCalcTotal(this.currentTip);
    });
  }
}

const app = new TipCalculator();
app.init();
