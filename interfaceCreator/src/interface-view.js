export class interfaceView {

 /**
   * Prints invalid form option.
   *
   * @returns {string} - String containing invalid.
   */
  printFormInvalidOption() {
    console.log("That is an invalid option.")
    return "Invalid"
  }

  /**
   * Prints the form question.
   *
   * @param {string} question - The question.
   * @param {string} color - The color code.
   */
  printFormQuestion(question, color) {
    if (color) {
      console.log(color, question)
    } else {
      console.log(question)
    }
  }

  /**
   * Prints the form alternatives.
   *
   * @param {string[]} alternatives - The alternatives.
   */
  printFormAlternatives(alternatives) {
    alternatives.forEach((element, index) => {
      console.log(index + 1 + ". " + element)
    })
  }

  /**
   * Prints the prompt question.
   *
   * @param {string} message - The message.
   * @param {string} color - The color code.
   */
  printPromptMessage(color, message) {
    console.log(color, message)
  }

  /**
   * Prints the sub menu.
   *
   * @param {string[]} view - The index and menu options.
   */
  printSubMenu(view) {
    for (const [key, value] of Object.entries(view)) {
      console.log(key + ". " + value + ".")
    }
  }

  /**
   * Prints the exit alternative.
   *
   * @param {string} color - The color code.
   */
  printExitMessage(color) {
    if (color) {
      console.log(color, "To exit the program enter Q")
    } else {
      console.log("To exit the program enter Q")
    }
  }

  /**
   * Prints the menu.
   *
   * @param {object} menu - The index and menu option.
   * @param {string} color - The color code.
   */
  printMenu(color, menu) {
    for (const [key, value] of Object.entries(menu)) {
      if (color) {
        console.log(color, +key + ". " + value + ".")
      } else {
        console.log(key + ". " + value + ".")
      }
    }
  }

  /**
   * Prints the no menu error.
   */
  printNoMenuError() {
    console.log("No menu has been created.")
  }

  /**
   * Prints the return to main menu and exit option.
   */
  printReturnToMenuAndExitWithColor(color) {
    console.log(
      color,
      "\nTo return to the main menu press enter."
    )
    console.log(color, "To exit the application enter Q.")
  }

  /**
   * Prints the return to menu option.
   */
  printReturnToMenuOption() {
    console.log("\nTo return to the main menu press enter.")
  }

  /**
   * Prints the exit application option.
   */
  printExitApplicationOption() {
    console.log("To exit the application enter Q.")
  }

  /**
   * Prints no menu functionality error message.
   */
  printNoMenuFunctionality() {
    console.log("No menu functionality has been assigned.")
  }

}
