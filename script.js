 (async () => {
const url = "https://fakestoreapi.com/products"
    const  datafun = async () => {
        try {
            let dataurl = await  fetch(url)
            let res =  await dataurl.json()
            return   res
    
          } catch (error) {
            return error
          }
    }
    const inenerItem = document.getElementById("inenerItem");
    const allproduct = await datafun();

    function genarateProduct (product){
        return `
        <div class="col">
              <div class="card d-flex align-items-center item" >
                <img src="${product.image}" class="card-img-top  mt-1" alt="...">
                <div class="card-body">
                  <h5 class="card-title">${product.title.split(" ").slice(0,10).join(" ")}</h5>
                  <p class="card-text">${product.description.split(" ").slice(0,20).join(" ")}</p>
                <button class="btn btn-danger">${product.price}</button>
                </div>
              </div>
            </div>
        `
    }
    const inputval = document.querySelector(".formData")
    function randerproduct (product){
        inenerItem.innerHTML = ""
        product.forEach((val,index) => {
            inenerItem.innerHTML += genarateProduct(val)
        })
    }
    randerproduct(allproduct)

    function searchFilterFun (text,search){
      try{
      return text.toLowerCase().includes(search)
      }catch(error){
        console.log(error)
      }
    }

    const form = document.querySelector(".form")
    form.addEventListener("submit", (val) => {
      val.preventDefault()
      const search =inputval.value.toLowerCase()
     const searchFilter = allproduct.filter((val) => {
      return  searchFilterFun(val.title, search)
        // console.log(index)
      })
    randerproduct(searchFilter)
    })
 })()
