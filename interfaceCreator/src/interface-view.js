export class interfaceView {
  printFormInvalidOption() {
    console.log("That is an invalid option.")
    return "Invalid"
  }

  printFormQuestion(question, color) {
    if (color) {
      console.log(color, question)
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
    console.log(color, message)
  }

  printSubMenu(view) {
    for (const [key, value] of Object.entries(view)) {
      console.log(key + ". " + value + ".")
    }
  }

  /**
   * Shows an exit message and sets the color of that message.
   */
  printExitMessage(color) {
    if (color) {
      console.log(color, "To exit the program enter Q")
    } else {
      console.log("To exit the program enter Q")
    }
  }

  printMenu(color, menu) {
    for (const [key, value] of Object.entries(menu)) {
      if (color) {
        console.log(color, +key + ". " + value + ".")
      } else {
        console.log(key + ". " + value + ".")
      }
    }
  }

  printNoMenuError() {
    console.log("No menu has been created.")
  }

  printReturnToMenuAndExitWithColor(color) {
    console.log(
      color,
      "\nTo return to the main menu press enter."
    )
    console.log(color, "To exit the application enter Q.")
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
