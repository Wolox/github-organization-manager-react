import i18next from 'i18next';

i18next.addResourceBundle(
  'es',
  'AddMemberToOrganization',
  {
    title: 'Agregar miembro a la organización de Wolox',
    addButton: 'Agregar',
    labelMenu: 'Agregar miembro a org',
    userInput: 'Usuario de Github',
    successMessage: 'El miembro se agregó con éxito.',
    failedMessage: 'Hubo un error al agregar el miembro a la organización.',
    validations: {
      username: {
        required: 'Este campo es requerido'
      }
    }
  },
  true
);
