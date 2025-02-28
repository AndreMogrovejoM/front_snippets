// {{name}} validator
import Validator from "validatorjs";

import { {{pascalCase name}}Payload } from "../../types/entity.types";
import { Errors } from "../../utils/errors/errors.utils.helpers";
import { HTTPError, clientError } from "../../utils/errors/errors.utils";

export const {{camelCase name}}Validator = (payload: {{pascalCase name}}Payload) => {
  const rules = {};
  const validation = new Validator(payload, rules);
  validation.passes();
  // If error, handle them
  const errors = JSON.stringify(validation.errors.errors);
  const errorCode = Errors.operationEntity.code;
  if (validation.errorCount > 0) {
    throw new HTTPError(clientError(400, errorCode, Error("Failed to parse payload"), errors))
  }
};
