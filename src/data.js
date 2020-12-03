// manipulação de arrays e objetos

// estas funciones son de ejemplo

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};

export const filtroEspecie=(data,userText) => {
  const filterEspecie=data.filter(index => index.species.includes(userText))
   return(filterEspecie)
};

//                           dados - texto do usuario
export const filtroGenero=(data,userText ) => {
  const filterGenero=data.filter(index => index.gender.includes(userText))
  return(filterGenero)
};
  
export const filtroStatus=(data,userText) => {
  const filterStatus=data.filter(data => data.status.includes(userText)) 
  return(filterStatus)
};

export const ordenacao=(data, order) => {
  return data.sort((a, b) => {
    if (order == "asc") {
      if (a[order] > b[order]) {
        return 1;
      } else{
        return -1;
      }
    } else{
      if (a[order] < b[order]) {
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

export const filtroNome=(data, name) =>
  data.filter(search => search.name.toUpperCase().indexOf(name.toUpperCase() >- 1));

