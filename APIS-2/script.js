console.log("attached")

let url = "https://pokeapi.co/api/v2/pokemon/ditto"

fetch(url)
    .then(res => {
        if (res.ok) {
            return res.json()
        } else {
            console.log("response was NOT ok");
        }
    })
    .then(res => {
        console.log(res);
    })
    .catch(err => console.log("it failed"))

// or

fetch(url)
.then(res => res.json())
.then(res => console.log(res))

// ///////////////////////////////

fetch(url)
.then(res => {
  console.log(`the response is ok? ${res.headers}`)
  console.log(res.headers)

  return res.json()
})

.then(data => {
    console.log(data.ok)
    console.log(data)
})
