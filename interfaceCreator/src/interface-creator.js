import prompt from "prompt-sync"
import process from "node:process"

/**
 * Creates an customizable interface.
 */
export class InterfaceCreator {
  #menu
  #menuFunctionality
  #menuColor
  #exitOption
  #exitColor
  #returnToMenuOption
  #returnToMenuColor
  #formColor

  /**
   * Starts the menu functionality.
   */
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

  /**
   * Checks if an element is a string or not.
   *
   * @param {string} element - The element to be checked.
   * @returns {boolean} - Returns false if the element is a string.
   */
  #isObjectOrString(element) {
    if (typeof element === "string") {
      return false
    }
    return true
  }

  /**
   * Prompts a user but uses a promise to that resolves when the user has entered input.
   * Allows for several consecutive inputs.
   *
   * @returns {string} - Returns the input.
   */
  #promptUserWaitForInput() {
    return new Promise((resolve) => {
      const input = this.#promptUser()
      resolve(input)
    })
  }

  /**
   * Checks which alternative a user has chosen and returns that alternative.
   *
   * @param {string[]} alternatives - An array of alternatives.
   * @param {string} input - The user input.
   * @returns {string} - The chosen alternative or a string that indicates invalid input.
   */
  #checkWhichFormAlternative(alternatives, input) {
    if (input > 0 && input < alternatives.length + 1) {
      const chosenAlternative = alternatives[input - 1]
      return chosenAlternative
    } else {
      console.log("That is an invalid option.")
      return "Invalid"
    }
  }

  /**
   * Creates a form.
   *
   * @param {Array} questions - an array of questions.
   * @returns {object} Returns an object of questions and it's answers.
   */
  async createForm(questions) {
    const answers = {}

    for (let i = 0; i < questions.length; i++) {
      if (this.#isObjectOrString(questions[i])) {
        const question = Object.keys(questions[i])[0]
        const arrayOfAlternatives = Object.values(questions[i])[0]

        if (this.#formColor) {
          console.log(this.#formColor, question)
        } else {
          console.log(question)
        }

        arrayOfAlternatives.forEach((element, index) => {
          console.log(index + 1 + ". " + element)
        })

        const input = await this.#promptUserWaitForInput()
        const chosenAlternative = this.#checkWhichFormAlternative(
          arrayOfAlternatives,
          await input
        )
        answers[question] = chosenAlternative
      } else {
        if (this.#formColor) {
          console.log(this.#formColor, questions[i])
        } else {
          console.log(questions[i])
        }
        const input = await this.#promptUserWaitForInput()
        answers[questions[i]] = await input
      }
    }
    this.start()
    return answers
  }

  /**
   * Creates a user prompt.
   *
   * @param {string} message - The question/statement that is to be shown before the prompt.
   * @param {Function} functionality - The function that is to be called with the input as a parameter.
   * @param {string} color - The color that the message should have.
   */
  createPrompt(message, functionality, color) {
    console.log(this.#getColorCode(color), message)
    const input = this.#promptUser()
    functionality(input)
  }

  /**
   * Sets the main menu.
   *
   * @param {object} menuOptions - Object of numbered keys starting from 1 and values as strings meant to be options.
   */
  setMainMenu(menuOptions) {
    this.#menu = menuOptions
  }

  /**
   * Creates a sub menu which should be put as functionality in the main menu.
   *
   * @param {object} view - An object of numbered keys starting from 1 and values as strings meant to be options.
   * @param {object} functionality - An object of numbered keys corresponding to the view with functions as values.
   */
  createSubMenu(view, functionality) {
    for (const [key, value] of Object.entries(view)) {
      console.log(key + ". " + value + ".")
    }

    if (this.#returnToMenuOption) {
      this.#showReturnToMenuAndExitOption()
    }

    const input = this.#promptUser()

    if (this.#returnToMenuOption) {
      this.#returnToMainMenu(input)
    }
    this.#handleMenuInput(functionality, input)
  }

  /**
   * Sets the color of a certain section.
   *
   * @param {string} section - The section that should have another color (menu, exit, returnToMenu or form)
   * @param {string} color - The color of the section.
   */
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
    if (section === "form") {
      const colorCode = this.#getColorCode(color)
      this.#formColor = colorCode
    }
  }

  /**
   * Sets the exit option.
   */
  addExitOption() {
    this.#exitOption = true
  }

  /**
   * Adds the return to menu option.
   */
  addReturnToMenuOption() {
    this.#returnToMenuOption = true
  }

  /**
   * Shows an exit message and sets the color of that message.
   */
  #showExitMessage() {
    if (this.#exitColor) {
      console.log(this.#exitColor, "To exit the program enter Q")
    } else {
      console.log("To exit the program enter Q")
    }
  }

  /**
   * Exits the application if Q is entered.
   *
   * @param {string} input - The input of the user.
   */
  #exitApplication(input) {
    if (input === "q") {
      process.exit(0)
    }
  }

  /**
   * Converts the color to its color code.
   *
   * @param {string} color - the color.
   * @returns {string} Returns the color code.
   */
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

  /**
   * Sets the functionality of the menu options.
   *
   * @param {object} menuFunctionality - An object of numbered keys starting from 1 with values as functions.
   */
  assignMainMenuFunctionality(menuFunctionality) {
    this.#menuFunctionality = menuFunctionality
  }

  /**
   * Creates the menu view and its color.
   */
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

  /**
   * Prompts a user.
   *
   * @returns {string} Returns the input.
   */
  #promptUser() {
    const readInput = prompt()
    return readInput()
  }

  /**
   * Returns the user to the main menu.
   */
  #returnToMainMenu(input) {
    input.toLowerCase()
    this.#exitApplication(input)
    if (!input) {
      this.start()
    }
  }

  /**
   * Creates a return to menu and exit option.
   */
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

  /**
   * Handles the input of the menu and calls the function depending on the input.
   *
   * @param {object} menuFunctionalityObject - An object of numbered keys starting from 1 with values as functions.
   * @param {string} userInput - The user input.
   */
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
