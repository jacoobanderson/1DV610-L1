import prompt from "prompt-sync"

export class InterfaceCreator {
  #menu
  #menuFunctionality
  #menuColor
  #menuFunctionalityColor
  #promptColor
  // private name?
  // colorCode
  // introColor

  start() {
    if (this.#menu) {
      this.#createMenu()
      const input = this.#promptUser()
      this.#handleMenuInput(input)
    }
  }

  createPrompt(message, functionality) {
    console.log(message)
    const input = this.#promptUser()
    functionality(input)
  }

  setMenu(menuOptions) {
    this.#menu = menuOptions
  }

  setColor(section, color) {
    if (section.toLowerCase() === 'menu') {
        const colorCode = this.#getColorCode(color)
        this.#menuColor = colorCode
    } 
  }



  #getColorCode(color) {
    color.toLowerCase()
    let colorCode;

    switch (color) {
      case "red":
        colorCode = "\x1b[31m"
        break
      case "green":
        colorCode = "\x1b[32m"
        break
      case "yellow":
        colorCode = "\x1b[33m"
        break
      case "blue":
        colorCode = "\x1b[34m"
        break
      case "cyan":
        colorCode = "\x1b[44m"
        break
      default:
        colorCode = "\x1b[37m"
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
            console.log(this.#menuColor + '%s\x1b[0m', key + ". " + value + ".")
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

  #handleMenuInput(input) {
    try {
      const action = this.#menuFunctionality[input]
      if (action) {
        action()
      }
    } catch (error) {
      console.log("No menu functionality has been assigned.")
    }
  }

  //method that gets input
  //intromessage
  //getusername
  //exit
  //setcolor
  //submenus?
}
