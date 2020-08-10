function getUser(callback) {
  setTimeout(function () {
    return callback(null, {
      id: 1,
      name: "Eurico",
      date: new Date(),
    });
  }, 1000);
}

function getTell(idUser) {
  setTimeout(function () {
    return {
      telefone: "110005258",
      ddd: 11,
    };
  }, 1000);
}

function getAdres(idUser) {}

function result(err, user) {
  console.log("user: ", user);
}
getUser(function result(err, user) {
  if(err){
    console.error('Erro no usuario', err)
    return;
  }
});

const tell = getTell();

console.log("tell: ", tell);
