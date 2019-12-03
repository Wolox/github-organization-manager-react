import i18next from 'i18next';

i18next.addResourceBundle(
  'es',
  'AddOwner',
  {
    addButton: 'Agregar',
    labelMenu: 'Agregar propietario',
    title: 'Agregar propietario(s) a un repositorio',
    owners: 'Usuario(s) de Github',
    successMessage: 'El/los propetario(s) se agregaron con éxito.',
    failedMessage: 'Hubo un error al intentar agregar al/los propietario(s).',
    validations: {
      owners: {
        required: 'Este campo es requerido'
      }
    }
  },
  true
);
