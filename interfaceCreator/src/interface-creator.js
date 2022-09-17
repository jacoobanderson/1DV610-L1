export class InterfaceCreator {
  #menu
  // private name?
  // menuColor
  // introColor

  start() {
    this.#createMenu()
  }

  #createMenu() {
    for (const [key, value] of Object.entries(this.#menu)) {
      console.log(key + ". " + value + ".")
    }
  }

  setMenu(menuOptions) {
    this.#menu = menuOptions
  }
  // getInput() {

  // }

  //method that gets input
  //intromessage
  //getusername
  //exit
  //setcolor
  //submenus?
}
