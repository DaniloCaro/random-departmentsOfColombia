const colombia = [
    {   Departamento:'Amazonas', Capital:'Leticia'      },
    {   Departamento:'Antioquia', Capital:'Medellín'    },
    {   Departamento:'Arauca', Capital:'Arauca'         },
    {   Departamento:'Atlántico', Capital:'Barranquilla'},
    {   Departamento:'Bolívar', Capital:'Cartagena de Indias'   },
    {   Departamento:'Boyacá', Capital:'Tunja'          },
    {   Departamento:'Caldas', Capital:'Manizales'      },
    {   Departamento:'Caquetá', Capital:'Florencia'     },
    {   Departamento:'Casanare', Capital:'Yopal'        },
    {   Departamento:'Cauca', Capital:'Popayán'         },
    {   Departamento:'Cesar', Capital:'Valledupar'      },
    {   Departamento:'Chocó', Capital:'Quibdó'          },
    {   Departamento:'Córdoba', Capital:'Montería'      },
    {   Departamento:'Cundinamarca', Capital:'Bogotá'   },
    {   Departamento:'Guainía', Capital:'Inírida'       },
    {   Departamento:'Guaviare', Capital:'San José del Guaviare'    },
    {   Departamento:'Huila', Capital:'Neiva'           },
    {   Departamento:'La Guajira', Capital:'Riohacha'   },
    {   Departamento:'Magdalena', Capital:'Santa Marta' },
    {   Departamento:'Meta', Capital:'Villavicencio'    },
    {   Departamento:'Nariño', Capital:'Pasto'          },
    {   Departamento:'Norte de Santander', Capital:'San José de Cúcuta'     },
    {   Departamento:'Putumayo', Capital:'Mocoa'        },
    {   Departamento:'Quindío', Capital:'Armenia'       },
    {   Departamento:'Risaralda', Capital:'Pereira'     },
    {   Departamento:'San Andrés y Providencia', Capital:'San Andrés'   },
    {   Departamento:'Santander', Capital:'Bucaramanga' },
    {   Departamento:'Sucre', Capital:'Sincelejo'       },
    {   Departamento:'Tolima', Capital:'Ibagué'         },
    {   Departamento:'Valle del Cauca', Capital:'Cali'  },        
    {   Departamento:'Vaupés', Capital:'Mitú'           }, 
    {   Departamento:'Vichada', Capital:'Puerto Carreño'}       
]

const randomDepartmetCol = () => {
    const selected = colombia[Math.floor(Math.random() * colombia.length)];
    console.log(selected);
    return selected;
}

module.exports = {
    randomDepartmetCol
};