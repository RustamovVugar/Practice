// "use strict";
// let students = [
//   {
//     name: "Musa",
//     surname: "Allahverdiye",
//     age: 26,
//   },

//   {
//     name: "Ramil",
//     surname: "Allahverdiyev",
//     age: 26,
//   },

//   {
//     name: "Resul",
//     surname: "Hesenov",
//     age: 15,
//   },

//   {
//     name: "Novreste",
//     surname: "Aslanzade",
//     age: 25,
//   },

//   {
//     name: "Gultac",
//     surname: "Jafarova",
//     age: 18,
//   },
// ];

// // getStudentsByFilter("r");

// // function getStudentsByFilter(str) {
// //   setTimeout(() => {
// //     let result = students.filter((m) => m.name.includes(str));
// //     console.log(result);
// //   }, 3000);
// // }

// let elem = document.querySelector("ul");

// // function getStudents() {
// //   setTimeout(() => {
// //     let str = "";
// //     students.forEach((stu) => {
// //       str += `<li class="list-group-item"><b>${stu.name}-${stu.surname}-${stu.age}</b></li>`;
// //     });

// //     elem.innerHTML = str;
// //   }, 2000);
// // }

// // function createStudent(student) {
// //   return new Promise((resolved, rejected) => {
// //     setTimeout(() => {
// //       students.push(student);

// //       let err = true;
// //       if(!err){
// //         resolved(students);
// //       }else{
// //         rejected("Something is wrong");
// //       }
// //     }, 3000);
// //   })
// // }

// // createStudent({ name: "Anar", surname: "Huseynov", age: 36 }).then(response =>{
// //     console.log(response)
// // }).catch(err =>{
// //     console.log(err)
// // })

// getAllPosts();

// function getAllPosts() {
//   fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((posts) => {
//       let str = "";
//       posts.forEach((post) => {
//         str += `<tr data-id="${post.id}" data-bs-toggle="modal" data-bs-target="#exampleModal">
//                     <td>${post.userId}</td>
//                     <td>${post.title}</td>
//                     <td>${post.body}</td>
//                 </tr>`;
//       });
//       document.querySelector("tbody").innerHTML = str;
//     });
// }

// setTimeout(() => {
//   let elems = document.querySelectorAll("tbody tr");
//   elems.forEach((elem) => {
//     elem.addEventListener("click", function () {
//       let id = parseInt(this.getAttribute("data-id"));

//       fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//         .then((response) => response.json())
//         .then((post) => {
//             document.querySelector(".modal-header h1").innerText = post.title;
//             document.querySelector(".modal-body").innerText = post.body;
//         });
//     })
//   });
// }, 2000);

// async function getPosts(){
// let data = await fetch("https://jsonplaceholder.typicode.com/posts");
// let response = await data.json();
// console.log(response)
// }
// getPosts()

//localhost/product/create

$(function () {
  $.ajax({url: "https://jsonplaceholder.typicode.com/posts",success: function (result) {
      console.log(result)
    }});
})
