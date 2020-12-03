// manipulação de arrays e objetos

// estas funciones son de ejemplo

//export const example = () => {
//  return 'example';
//};

//export const anotherExample = () => {
//  return 'OMG';
//};

export const filtroEspecie = (data,userText) =>{
    const filterEspecie = data.filter(index => index.species.includes(userText))
    return (filterEspecie)
  };

//                           dados - texto do usuario
export const filtroGenero = (data,userText ) =>{
    const filterGenero = data.filter(index => index.gender.includes(userText))
    return(filterGenero)
  };
  
export const filtroStatus = (data,userText) => {
  const filterStatus = data.filter(data => data.status.includes(userText)) 
    return(filterStatus)
};

export const filtroNome = (data, name) =>
    data.filter(search => search.name.toUpperCase().indexOf(name.toUpperCase() >- 1));

