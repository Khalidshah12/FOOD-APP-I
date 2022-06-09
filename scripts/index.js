// // let searchData = async () => {
// //     const search = document.querySelector('#search').value;
// //     let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

// //     let res = await fetch(url)
// //     let data = await res.json()
// //     // console.log(data.meals)
// //     display(data.meals)
// // }

// let display = (data) => {
//     const food = document.querySelector('#food');
//     food.innerHTML = null
//     data.forEach(function(elem){
       
//         const foodList = document.createElement('div');
//         foodList.setAttribute("class","foodList")

//         const img = document.createElement('img');
//         img.src = elem.strMealThumb

//         const titleSpan = document.createElement('span');
//         titleSpan.innerText = elem.strMeal

//         const title = document.createElement('p');
//         title.setAttribute("class","title")
//         title.innerText = "Food Name: "
//         title.append(titleSpan)

//         const catSpan = document.createElement('span');
//         catSpan.setAttribute("class","catSpan")
//         catSpan.innerText = elem.strCategory

//         const category = document.createElement('p');
//         category.innerText = "Category: "
//         category.append(catSpan)

//         foodList.append(img,title,category)
//         food.append(foodList)
//     })
// }

