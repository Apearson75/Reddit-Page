

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    const list = ['memes', 'woooosh']
    const randomReddit = list[Math.floor(Math.random() * 2)]
    console.log(randomReddit)    
    
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
    
    fetch(`https://meme-api.herokuapp.com/gimme/${randomReddit}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            console.log(data['url']);
            document.getElementById("image").src = data['url'];
        })
})


  