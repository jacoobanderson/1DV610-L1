import prompt from 'prompt-sync'

export class InterfaceCreator {
  #menu
  #menuFunctionality
  #user
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
    for (const [key, value] of Object.entries(this.#menu)) {
      console.log(key + ". " + value + ".")
    }
  }

  #promptUser() {
    const readInput = prompt()
    return readInput()
  }

  #handleMenuInput(input) {
    const action = this.#menuFunctionality[input]
    if (action) {
        action()
    }
  }

  //method that gets input
  //intromessage
  //getusername
  //exit
  //setcolor
  //submenus?
}
