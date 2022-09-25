import prompt from "prompt-sync"
import process from "node:process"

export class InterfaceCreator {
  #menu
  #menuFunctionality
  #menuColor
  #exitOption
  #exitColor
  #returnToMenuOption
  #returnToMenuColor
  formData

  start() {
    if (this.#menu) {
      this.#createMenu()

      if (this.#exitOption) {
        this.#showExitMessage()
      }

      const input = this.#promptUser()

      if (this.#exitOption) {
        this.#exitApplication(input)
      }
      this.#handleMenuInput(this.#menuFunctionality, input)
    }
  }

  #isObjectOrString(element) {
    if (typeof element === "string") {
      return false
    }
    return true
  }

  #promptUserWaitForInput() {
    return new Promise((resolve) => {
      const input = this.#promptUser()
      resolve(input)
    })
  }

  #checkWhichFormAlternative(alternatives, input) {
    const chosenAlternative = alternatives[input - 1]
    return chosenAlternative
  }

  async createForm(questions) {
    const answers = {}

    for (let i = 0; i < questions.length; i++) {
      if (this.#isObjectOrString(questions[i])) {
        const question = Object.keys(questions[i])[0]
        const arrayOfAlternatives = Object.values(questions[i])[0]
        console.log(question)

        arrayOfAlternatives.forEach((element, index) => {
          console.log((index + 1) + '. ' + element)
        })

        const input = await this.#promptUserWaitForInput()
        const chosenAlternative = this.#checkWhichFormAlternative(arrayOfAlternatives, await input)
        answers[question] = chosenAlternative
        console.log(answers)
      } else {
        console.log(questions[i])
        const input = await this.#promptUserWaitForInput()
        answers[questions[i]] = await input
      }
    }
  }

  // storeFormDataInFile()

  createPrompt(message, functionality, color) {
    console.log(this.#getColorCode(color), message)
    const input = this.#promptUser()
    functionality(input)
  }

  setMainMenu(menuOptions) {
    this.#menu = menuOptions
  }

  createSubMenu(view, functionality) {
    for (const [key, value] of Object.entries(view)) {
      console.log(key + ". " + value + ".")
    }
    if (this.#returnToMenuOption) {
      this.#showReturnToMenuAndExitOption()
      this.#returnToMainMenu()
    }
    const input = this.#promptUser()
    this.#handleMenuInput(functionality, input)
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
    if (section === "returnToMenu") {
      const colorCode = this.#getColorCode(color)
      this.#returnToMenuColor = colorCode
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

  assignMainMenuFunctionality(menuFunctionality) {
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
    if (this.#returnToMenuColor) {
      console.log(
        this.#returnToMenuColor,
        "\nTo return to the main menu press enter."
      )
      console.log(this.#returnToMenuColor, "To exit the application enter Q.")
    } else {
      console.log("\nTo return to the main menu press enter.")
      console.log("To exit the application enter Q.")
    }
  }

  #handleMenuInput(menuFunctionalityObject, userInput) {
    try {
      const menuFunctionToCall = menuFunctionalityObject[userInput]
      if (menuFunctionToCall) {
        menuFunctionToCall()
      }
    } catch (error) {
      console.log("No menu functionality has been assigned.")
    }
  }
}
