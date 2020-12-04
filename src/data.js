export const filtroNome = (data, name) =>
  data.filter(search => search.name.toUpperCase().includes(name.toUpperCase()));

export const filtroStatus = (data, userText) => {
  const filterStatus = data.filter(data => data.status.includes(userText))
  return (filterStatus)
};

export const filtroEspecie = (data, userText) => {
  const filterEspecie = data.filter(index => index.species.includes(userText))
  return (filterEspecie)

export const filtroGenero = (data, userText) => {
  const filterGenero = data.filter(index => index.gender.includes(userText))
  return (filterGenero)
};  


//  export const contaStatus = (data,statusEscolhido) =>
//  parseFloat((statusEscolhido.length * 100)/(data.length).toFixed(2));

