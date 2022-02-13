"use strict";

class ConfirmationDialog {

  constructor(mainText, acceptText, cancelText) {
    this.mainText = mainText
    this.acceptText = acceptText
    this.cancelText = cancelText

    this.parent = document.body;

    this.dialog = undefined;
    this.yesButton = undefined;
    this.noButton = undefined;
       
    this._createDialog();
  }

  question() {
    return new Promise((resolve, _reject) => {
      this.yesButton.addEventListener("click", () => {
        resolve("Yes");
        this._destroyModal();
      });

      this.noButton.addEventListener("click", () => {
        resolve("Cancel");
        this._destroyModal();
      });
    })
  }

  _createDialog() {
    this.dialog = document.createElement('dialog');
    this.dialog.classList.add('confirmation-dialog');
    this.dialog.show();

    const window = document.createElement('div');
    window.classList.add('dialog-window');
    this.dialog.appendChild(window);

    const text = document.createElement('span');
    text.textContent = this.mainText;
    window.appendChild(text);

    const buttonGeneral = document.createElement('div');
    buttonGeneral.classList.add('button-general');
    window.appendChild(buttonGeneral);

    this.yesButton = document.createElement('button');
    this.yesButton.type = "button";
    this.yesButton.textContent = this.acceptText;
    buttonGeneral.appendChild(this.yesButton);

    this.noButton = document.createElement('button');
    this.noButton.type = "button";
    this.noButton.textContent = this.cancelText;
    buttonGeneral.appendChild(this.noButton);

    this.parent.appendChild(this.dialog);
  }

  _destroyModal() {
    this.parent.removeChild(this.dialog);
    delete this;
  }
}