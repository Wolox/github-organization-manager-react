import { t } from 'i18next';

import { required } from 'utils/inputValidations';

export const isRequired = required(t('AddMemberToTeam:validations.usernames.required'));
