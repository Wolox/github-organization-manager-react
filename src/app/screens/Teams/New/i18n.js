import i18next from 'i18next';

i18next.addResourceBundle(
  'es',
  'teamCreation',
  {
    title: 'Crear nuevo equipo',
    teamName: 'Nombre',
    createButton: 'Crear',
    labelMenu: 'Crear equipos',
    successMessage: 'El equipo se creó con éxito.',
    failedMessage: 'Hubo un error en la creación del equipo.',
    validations: {
      teamName: {
        required: 'Este campo es requerido'
      }
    }
  },
  true
);
