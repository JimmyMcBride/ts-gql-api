import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from "class-validator";

import { Profile } from "../../entity/Profile";

@ValidatorConstraint({ async: true })
export class IfEmailAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(email: string): Promise<boolean> {
    return Profile.findOne({ where: { email } }).then((profile) => {
      if (profile) return false;
      return true;
    });
  }
}

export function DoesEmailAlreadyExist(validationOptions?: ValidationOptions) {
  return function (object: object, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IfEmailAlreadyExistConstraint,
    });
  };
}
