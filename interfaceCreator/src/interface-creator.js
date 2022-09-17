import readline from 'readline'
import prompt from 'prompt-sync'

export class InterfaceCreator {
  #menu
  #menuFunctionality
  // private name?
  // menuColor
  // introColor

  start() {
    this.#createMenu()
    this.#handleInput(this.#promptUser())
  }

  #createMenu() {
    for (const [key, value] of Object.entries(this.#menu)) {
      console.log(key + ". " + value + ".")
    }
  }

  setMenu(menuOptions) {
    this.#menu = menuOptions
  }

  setMenuFunctionality(menuFunctionality) {
    this.#menuFunctionality = menuFunctionality
  }

  #promptUser() {
    const readInput = prompt()
    return readInput()
  }

  #handleInput(input) {
    const action = this.#menuFunctionality[input]
    action()
  }

  //method that gets input
  //intromessage
  //getusername
  //exit
  //setcolor
  //submenus?
}
