import { t } from 'i18next';

import { required } from 'utils/inputValidations';

export const isRequired = required(t('AddOwner:validations.owners.required'));
