import prompt from "prompt-sync"
import process from "node:process"

export class InterfaceCreator {
  #menu
  #menuFunctionality
  #menuColor
  #exitOption
  #exitColor
  #returnToMenuOption

  start() {
    if (this.#menu) {
      this.#createMenu()
      if (this.#exitOption) this.#showExitMessage()

      const input = this.#promptUser()

      if (this.#exitOption) {
        this.#exitApplication(input)
      }
      this.#handleMenuInput(input)
    }
  }

  createPrompt(message, functionality, color) {
    console.log(this.#getColorCode(color), message)
    const input = this.#promptUser()
    functionality(input)
  }

  setMenu(menuOptions) {
    this.#menu = menuOptions
  }

  setColor(section, color) {
    section.toLowerCase()
    if (section === "menu") {
      const colorCode = this.#getColorCode(color)
      this.#menuColor = colorCode
    }
    if (section === "exit") {
      const colorCode = this.#getColorCode(color)
      this.#exitColor = colorCode
    }
  }

  addExitOption() {
    this.#exitOption = true
  }

  addReturnToMenuOption() {
    this.#returnToMenuOption = true
  }

  #showExitMessage() {
    if (this.#exitColor) {
      console.log(this.#exitColor, "To exit the program enter Q")
    } else {
      console.log("To exit the program enter Q")
    }
  }

  #exitApplication(input) {
    if (input === "q") {
      process.exit(0)
    }
  }

  #getColorCode(color) {
    color.toLowerCase()
    let colorCode

    switch (color) {
      case "red":
        colorCode = "\x1b[31m%s\x1b[0m"
        break
      case "green":
        colorCode = "\x1b[32m%s\x1b[0m"
        break
      case "yellow":
        colorCode = "\x1b[33m%s\x1b[0m"
        break
      case "blue":
        colorCode = "\x1b[34m%s\x1b[0m"
        break
      case "cyan":
        colorCode = "\x1b[36m%s\x1b[0m"
        break
      default:
        colorCode = "\x1b[37m%s\x1b[0m"
        break
    }
    return colorCode
  }

  assignMenuFunctionality(menuFunctionality) {
    this.#menuFunctionality = menuFunctionality
  }

  #createMenu() {
    try {
      for (const [key, value] of Object.entries(this.#menu)) {
        if (this.#menuColor) {
          console.log(this.#menuColor, +key + ". " + value + ".")
        } else {
          console.log(key + ". " + value + ".")
        }
      }
    } catch (error) {
      console.log("No menu has been created.")
    }
  }

  #promptUser() {
    const readInput = prompt()
    return readInput()
  }

  #returnToMainMenu() {
    const input = this.#promptUser()
    input.toLowerCase()
    this.#exitApplication(input)
    if (!input) {
      this.start()
    }
  }

  #showReturnToMenuAndExitOption() {
    console.log("\nTo return to the main menu press enter.")
    console.log("To exit the application enter Q.")
  }

  #handleMenuInput(input) {
    try {
      const action = this.#menuFunctionality[input]
      if (action) {
        action()
      }

      if (this.#returnToMenuOption) {
        this.#showReturnToMenuAndExitOption()
        this.#returnToMainMenu()
      }
    } catch (error) {
      console.log("No menu functionality has been assigned.")
    }
  }
}
