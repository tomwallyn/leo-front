function start() {
  const databody = {
    pseudo: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  fetch("http://localhost:5500/login", {
    method: "post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(databody),
  })
    .then((result) => result.json())
    .then(function (data) {
      if (JSON.stringify(data[0]) == undefined) {
        console.log("error");
      } else {
        login(JSON.stringify(data[0].pseudo));
      }
    });
}

async function login(pseudo) {
  let formData = new FormData();
  formData.append("pseudo", pseudo);
  return await fetch("function/setSession.php", {
    method: "POST",
    body: formData,
  }).then(function (response) {
    if (response.status == 200) {
      window.location.href = "dashboard.html";
    } else {
      return "not connected";
    }
  });
}

//http://localhost:5500
