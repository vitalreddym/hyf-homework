const searchButton = document.querySelector("#myBtn");
const inputWord = document.querySelector(".user-input")
const inputNumber = document.querySelector(".input-number");
const output = document.getElementsByClassName(".result");

searchButton.addEventListener("click", () => {
    let keyWord = inputWord.value;
    let getNumber = inputNumber.value;

    if (inputWord.value === "") {
        alert("Enter a keyword");
    } else {
        fetch(
            `http://api.giphy.com/v1/gifs/search?api_key=mEPd3No3xxKHLwwRgCz6sCFwLLAWs5SM&q=${keyWord}&limit=${getNumber}`
        )

            .then(response => response.json())
            .then(json => {
                json.data
                    .map(gif => gif.images.fixed_height.url)
                    .forEach(url => {
                        let img = document.createElement('img')
                        img.src = url
                        document.body.appendChild(img)

                    })
            })
            .catch(error => document.body.appendChild = error)
    }
});
