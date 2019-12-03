import i18next from 'i18next';

i18next.addResourceBundle(
  'es',
  'AddMemberToTeam',
  {
    addButton: 'Agregar',
    title: 'Agregar miembro(s) al equipo',
    labelMenu: 'Agregar miembro',
    usernames: 'Usuario(s) de Github',
    successMessage: 'El/Los miembro(s) se agregaron con éxito.',
    failedMessage: 'Hubo un error al agregar el/los miembro(s) al equipo.',
    validations: {
      usernames: {
        required: 'Este campo es requerido'
      }
    }
  },
  true
);
