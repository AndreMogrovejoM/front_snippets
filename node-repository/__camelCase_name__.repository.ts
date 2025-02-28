// {{name}} repository
import { RepositoryRes, Repository } from "../repositories.types";
import Entity from "../../models/entity/Entity.model";
import { IEntityModel } from "../../models/entity/Entity.types";
import { {{pascalCase name}}Payload } from "../../types/entity.types";
import { HTTPError, clientError } from "../../utils/errors/errors.utils";
import { Errors } from "../../utils/errors/errors.utils.helpers";

export const {{camelCase name}}Repository: Repository<
  {{pascalCase name}}Payload,
  IEntityModel
> = async payload => {
  const res: RepositoryRes<IEntityModel> = { document: null, error: null };
  try {
    res.document = await Entity.create(payload);
  } catch (e) {
    res.error = e;
  }
  // Throw error if any
  if (res.error) {
    const errorCode = Errors.operationEntity.code;
    throw new HTTPError(
      clientError(400, errorCode, Error("Failed to {{name}}"), res.error.message)
    );
  }
  return res;
};
