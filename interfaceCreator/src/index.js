import { InterfaceCreator } from "./interface-creator.js";

const ui = new InterfaceCreator()
ui.setMenu({
    1: 'Add scores',
    2: 'Calculate sum',
    3: 'Calculate average'
})

ui.start()