function getTaches() {
getUserCode().then(function(userPseudo){
    fetch(`http://localhost:5500/days/${userPseudo}`, {
    method: "get",
  })
    .then((result) => result.json())
    .then(function (data) {
        data[0].tasks.map(function(list){
            console.log(list);
            var main = document.createElement("div");
            main.className = "col-100";

            var a = document.createElement("a");
            a.className = "item-category";
            a.style.backgroundColor = "red";

            var div2 = document.createElement("div");
            div2.className = "item-info";

            var h3 = document.createElement("h3");
            h3.className = "title";
            var text = document.createTextNode(list.title);
            h3.appendChild(text);

            var p = document.createElement("p");
            var textp = document.createTextNode(list.description);
            p.appendChild(textp);

            var image = document.createElement("img");
            image.className = "layer-icon";
            image.setAttribute("src", "img/svg/oats.svg");

            var div3 = document.createElement("div");
            div3.className = "item-icon";

            var image2 = document.createElement("img");
            image2.setAttribute("src", "img/svg/oats.svg");

            document.getElementById("list-tasks").appendChild(main);
            main.appendChild(a);
            a.appendChild(div2);
            div2.appendChild(h3);
            div2.appendChild(p);
            a.appendChild(image);
            a.appendChild(div3);
            div3.appendChild(image2);

        })
        //console.log(JSON.stringify(data[0].tasks));
    });
})
}

function getUserCode() {
  return new Promise((resolve, reject) => {
    var myHeaders = new Headers();

    var myInit = {
      method: "GET",
      headers: myHeaders,
      mode: "cors",
      cache: "default",
    };

    fetch(`./function/getSession.php`, myInit).then(function (response) {
      resolve(response.json());
    });
  });
}
