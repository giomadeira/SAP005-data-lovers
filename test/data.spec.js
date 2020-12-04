import {filtroStatus, filtroEspecie, filtroGenero, filtroNome} from '../src/data.js';

const resultsTeste = [
  {
    "id": 4,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female"
  },
  {
    "id": 20,
    "name": "Ants in my Eyes Johnson",
    "status": "unknown",
    "species": "Human",
    "type": "Human with ants in his eyes",
    "gender": "Male"
  },
  {
    "id": 23,
    "name": "Arcade Alien",
    "status": "unknown",
    "species": "Alien",
    "type": "",
    "gender": "Male"
  },
  {
    "id": 37,
    "name": "Beth Sanchez",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female"
  },
  {
    "id": 38,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female"
  },
  {
    "id": 39,
    "name": "Beth Smith",
    "status": "Alive",
    "species": "Human",
    "type": "",
    "gender": "Female"
  },
  {
    "id": 40,
    "name": "Beth's Mytholog",
    "status": "Dead",
    "species": "Mytholog",
    "type": "",
    "gender": "Female"
  },
  {
    "id": 116,
    "name": "Evil Beth Clone",
    "status": "Dead",
    "species": "Human",
    "type": "Clone",
    "gender": "Female"    
  },
  {
    "id": 148,
    "name": "Goddess Beth",
    "status": "unknown",
    "species": "Mytholog",
    "type": "",
    "gender": "Female"
  },
];

describe('Trazer personagens que contenham parte na String pesquisada', () => {
  it('is a function', () => {
    expect(typeof filtroNome).toBe('function');
  });

  it('returns `filtroNome`', () => {
    expect(filtroNome(resultsTeste, "Beth")).toStrictEqual([
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 37,
        "name": "Beth Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 38,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 39,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 40,
        "name": "Beth's Mytholog",
        "status": "Dead",
        "species": "Mytholog",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 116,
        "name": "Evil Beth Clone",
        "status": "Dead",
        "species": "Human",
        "type": "Clone",
        "gender": "Female"    
      },
      {
        "id": 148,
        "name": "Goddess Beth",
        "status": "unknown",
        "species": "Mytholog",
        "type": "",
        "gender": "Female"
      },
    ]);
  });
});


describe('deve retornar o status de vida', () => {
  it('is a function', () => {
    expect(typeof filtroStatus).toBe('function');
  });

  it('returns `filtroStatus`', () => {
    
    expect(filtroStatus(resultsTeste, "Alive")).toStrictEqual([
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 37,
        "name": "Beth Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 38,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },  
      {
        "id": 39,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },    
    ]);
  });
});

describe('deve retornar a espécie do personagem', () => {
  it('is a function', () => {
    expect(typeof filtroEspecie).toBe('function');
  });

  it('returns `filtroEspecie`', () => {
    
    expect(filtroEspecie(resultsTeste, "Human")).toStrictEqual([
      {
        "id": 4,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 20,
        "name": "Ants in my Eyes Johnson",
        "status": "unknown",
        "species": "Human",
        "type": "Human with ants in his eyes",
        "gender": "Male",
      },
      {
        "id": 37,
        "name": "Beth Sanchez",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },
      {
        "id": 38,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },  
      {
        "id": 39,
        "name": "Beth Smith",
        "status": "Alive",
        "species": "Human",
        "type": "",
        "gender": "Female"
      },  
      {
        "id": 116,
        "name": "Evil Beth Clone",
        "status": "Dead",
        "species": "Human",
        "type": "Clone",
        "gender": "Female",
      }
      
    ]);
  });
});

describe('deve retornar o gênero do personagem', () => {
  it('is a function', () => {
    expect(typeof filtroGenero).toBe('function');
  });

  it('returns `filtroGenero`', () => {
    
    expect(filtroGenero(resultsTeste, "Male")).toStrictEqual([
      {
        "id": 20,
        "name": "Ants in my Eyes Johnson",
        "status": "unknown",
        "species": "Human",
        "type": "Human with ants in his eyes",
        "gender": "Male"
      },
      {
        "id": 23,
        "name": "Arcade Alien",
        "status": "unknown",
        "species": "Alien",
        "type": "",
        "gender": "Male"
      },
    ]);
  });
});



