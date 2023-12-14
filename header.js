function showMenu() {
    let Menu = document.getElementById(`btn-menu`)
    const clickMenu = () => {
        document.body.classList.toggle(`show-menu`)
    }
    Menu.addEventListener(`click`, clickMenu)
}



function initialize() {
    showMenu()
}

initialize()





