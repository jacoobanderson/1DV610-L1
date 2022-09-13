export class InterfaceCreator {
    // private name?
    createMenu(menuOptions) {
        for (const [key, value] of Object.entries(menuOptions)) {
            console.log(key + '. ' + value + '.')
        }
    }
}