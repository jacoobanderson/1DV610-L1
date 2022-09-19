import prompt from "prompt-sync"

export class InterfaceCreator {
  #menu
  #menuFunctionality
  // private name?
  // menuColor
  // introColor

  start() {
    this.#createMenu()
    const input = this.#promptUser()
    this.#handleMenuInput(input)
  }

  createPrompt(message, functionality) {
    console.log(message)
    const input = this.#promptUser()
    functionality(input)
  }

  setMenu(menuOptions) {
    this.#menu = menuOptions
  }

  assignMenuFunctionality(menuFunctionality) {
    this.#menuFunctionality = menuFunctionality
  }

  #createMenu() {
    try {
      for (const [key, value] of Object.entries(this.#menu)) {
        console.log(key + ". " + value + ".")
      }
    } catch (error) {
        console.log('No menu has been created.')
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
