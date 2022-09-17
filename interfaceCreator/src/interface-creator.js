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
    this.#promptUser()
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

  //method that gets input
  //intromessage
  //getusername
  //exit
  //setcolor
  //submenus?
}
