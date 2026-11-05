import { MentalModel } from '../types/mental-models';
import { Language } from '../i18n/translations';

/**
 * Returns a copy of the model with its name and description localized for the
 * given language, falling back to the original English text when no Swahili
 * translation is available.
 */
export function localizeModel(model: MentalModel, language: Language): MentalModel {
  if (language === 'sw') {
    return {
      ...model,
      name: model.nameSw ?? model.name,
      description: model.descriptionSw ?? model.description,
    };
  }
  return model;
}
