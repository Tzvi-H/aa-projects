export function getAllDogs() {
  return fetch("/dogs");
}

export function getDogNumberTwo() {
  return fetch("/dogs/2");
}

export function postNewDog() {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ name: "perro", age: 0.1 }),
  };
  return fetch("/dogs", options);
}

export function postNewDogV2(name, age) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({ name, age }),
  };
  return fetch("/dogs", options);
}

export function deleteDog(id) {
  return fetch(`/dogs/${id}/delete`, {
    method: "POST",
    headers: {
      AUTH: "ckyut5wau0000jyv5bsrud90y",
    },
  });
}
