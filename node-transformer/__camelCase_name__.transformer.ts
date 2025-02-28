// {{name}} transformer
import { IEntityModel } from "../../models/entity/Entity.types";
import { entityTransformer } from "./entity.transformer";

export const {{camelCase name}}Transformer = (entityDoc: IEntityModel | IEntityModel[] | null, authLevel: number) => {
  if (!entityDoc) {
    return entityDoc;
  }
  return entityTransformer(entityDoc, authLevel);
};
