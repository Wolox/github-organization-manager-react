import { t } from 'i18next';

import { required } from 'utils/inputValidations';

export const isRequired = required(t('AddMemberToOrganization:validations.username.required'));
