class functions{

    constructor(){}
    add(a, b){
        return a + b
    }

    calculateHyp(a, b){
        return Math.sqrt(a*a + b*b);
    }

    removeBugs(code) {
        return code.filter(c => c != "BUG")
    }

    clearLowPriority(array){
        return array.filter(a => a.priority === "HIGH");
    }
}


class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        if (this.pictureURLs.indexOf(picURL) === -1){
            return;
        }
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}

module.exports = {functions, PictureManager}

