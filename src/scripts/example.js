class Example {

    constructor(ele) {
        this.ele = ele
        this.ele.innerHTML = "<h1>Capy's ALIVEEEE!!!</h1>"

        this.handleClick = this.handleClick.bind(this);
        this.ele.addEventListener("click", this.handleClick.bind(this))
    }

    handleClick() {
        this.ele.children[0].innerText = "Ouch!"
    }

}

export default Example;