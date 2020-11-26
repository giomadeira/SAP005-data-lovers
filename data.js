// manipulação de arrays e objetos


// estas funciones son de ejemplo

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};


export const filtroNome = (rickandmorty) =>{
  let arrayVazia = [];

  rickandmorty.array.forEach((positionCharacter => {
   let selectCharacter = (positionCharacter.name.find(

    (character) => character == name
    ));
    if (selectCharacter != undefined){
      arrayVazia.push(positionCharacter);
    }
  }));
  console.log (arrayVazia)
    return arrayVazia;

};
export const filtroEspecie = (rickandmorty) =>{
  let arrayVazia = [];

  rickandmorty.array.forEach((positionCharacter => {
   let selectCharacter = (positionCharacter.species.find(

    (character) => character == species
    ));
    if (selectCharacter != undefined){
      arrayVazia.push(positionCharacter);
    }
  }));
  console.log (arrayVazia)
    return arrayVazia;

};
export const filtroGenero = (rickandmorty) =>{
  let arrayVazia = [];

  rickandmorty.array.forEach((positionCharacter => {
   let selectCharacter = (positionCharacter.gender.find(

    (character) => character == gender
    ));
    if (selectCharacter != undefined){
      arrayVazia.push(positionCharacter);
    }
  }));
  console.log (arrayVazia)
    return arrayVazia;

};
export const filtroStatus = (rickandmorty) =>{
  let arrayVazia = [];

  rickandmorty.array.forEach((positionCharacter => {
   let selectCharacter = (positionCharacter.status.find(

    (character) => character == status
    ));
    if (selectCharacter != undefined){
      arrayVazia.push(positionCharacter);
    }
  }));
  console.log (arrayVazia)
    return arrayVazia;

};

export const ordenacao = (data, order) => {
  return data.sort((a, b) => {
    if (order == "desc") {
      if (a[order] < b[order]) {
        return 1;
      } else{
        return -1;
      }
    } else{
      if (a[order] > b[order]) {
        return 1;
      } else{
        return -1;
      }
    }
  });
};


//const capturarDados = data.rickandmorty;
//function personagens(){
  //for (let i = 0; i < rickandmorty.length; i++){
    
  //}


//}
