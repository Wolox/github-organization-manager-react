import { t } from 'i18next';

import { required } from 'utils/inputValidations';

export const isRequired = required(t('RepoCreation:validations.projectName.required'));
