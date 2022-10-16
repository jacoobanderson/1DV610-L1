export class interfaceView {
  printFormInvalidOption() {
    console.log("That is an invalid option.")
    return "Invalid"
  }

  printFormQuestion(question) {
    if (this.#formColor) {
      console.log(this.#formColor, question)
    } else {
      console.log(question)
    }
  }

  printFormAlternatives(alternatives) {
    alternatives.forEach((element, index) => {
      console.log(index + 1 + ". " + element)
    })
  }

  printPromptMessage(color, message) {
    console.log(this.#getColorCode(color), message)
  }

  printSubMenu(view) {
    for (const [key, value] of Object.entries(view)) {
      console.log(key + ". " + value + ".")
    }
  }

  /**
   * Shows an exit message and sets the color of that message.
   */
  printExitMessage() {
    if (this.#exitColor) {
      console.log(this.#exitColor, "To exit the program enter Q")
    } else {
      console.log("To exit the program enter Q")
    }
  }

  printMenu() {
    for (const [key, value] of Object.entries(this.#menu)) {
      if (this.#menuColor) {
        console.log(this.#menuColor, +key + ". " + value + ".")
      } else {
        console.log(key + ". " + value + ".")
      }
    }
  }

  printNoMenuError() {
    console.log("No menu has been created.")
  }

  printReturnToMenuAndExitWithColor() {
    console.log(
      this.#returnToMenuColor,
      "\nTo return to the main menu press enter."
    )
    console.log(this.#returnToMenuColor, "To exit the application enter Q.")
  }

  printReturnToMenuOption() {
    console.log("\nTo return to the main menu press enter.")
  }

  printExitApplicationOption() {
    console.log("To exit the application enter Q.")
  }

  printNoMenuFunctionality() {
    console.log("No menu functionality has been assigned.")
  }

}
