import i18next from 'i18next';

i18next.addResourceBundle(
  'es',
  'RepoCreation',
  {
    title: 'Crear nuevo repositorio',
    advise:
      'Se requiere nombre y tecnología/s del proyecto. Enviar el formulario sin ellos no tendrá ningún efecto.',
    projectName: 'Nombre del proyecto',
    private: 'Privado',
    createButton: 'Crear',
    labelMenu: 'Crear repo',
    techTitle: 'Tecnologías',
    successMessage: 'El/los repositorios se crearon con éxito.',
    failedMessage: 'Hubo un error en la creación del repositorio.',
    validations: {
      projectName: {
        required: 'Este campo es requerido'
      }
    }
  },
  true
);
