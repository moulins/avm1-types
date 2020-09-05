import { $Boolean } from "kryo/lib/boolean.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { ActionBase } from "../action-base.js";
import { $ActionType, ActionType } from "../action-type.js";
import { $GetUrl2Method, GetUrl2Method } from "../get-url2-method.js";

export interface GetUrl2 extends ActionBase {
  action: ActionType.GetUrl2;
  method: GetUrl2Method;
  loadTarget: boolean;
  loadVariables: boolean;
}

export const $GetUrl2: RecordIoType<GetUrl2> = new RecordType<GetUrl2>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.GetUrl2 as ActionType.GetUrl2})},
    method: {type: $GetUrl2Method},
    loadTarget: {type: $Boolean},
    loadVariables: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
