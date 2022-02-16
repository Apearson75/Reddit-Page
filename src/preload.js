const list = ['memes', 'woooosh']

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }

    fetch("https://meme-api.herokuapp.com/gimme/memes")
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data['url']);
            document.getElementById("image").src = data['url'];
        })
})


  