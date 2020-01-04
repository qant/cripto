class Interface {
  /**
   * Show message with text and classes of boostrap 4, remove after 2sekonds
   * @param {*} text
   * @param {*} classes
   */
  showMessage(text, classes) {
    const div = document.createElement("div");
    div.className = classes;
    div.appendChild(document.createTextNode(text));
    const message = document.querySelector(".mensajes");
    message.appendChild(div);
    setTimeout(message => {
      document.querySelector(".mensajes div").remove();
    }, 2000);
  }
}
