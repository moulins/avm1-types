import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/lib/ts-enum.js";

export enum GetUrl2Method {
  None,
  Get,
  Post,
}

export const $GetUrl2Method: TsEnumType<GetUrl2Method> = new TsEnumType<GetUrl2Method>({
  enum: GetUrl2Method,
  changeCase: CaseStyle.KebabCase,
});
