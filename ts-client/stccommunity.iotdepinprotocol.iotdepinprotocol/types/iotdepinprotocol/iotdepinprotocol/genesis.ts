/* eslint-disable */
import _m0 from "protobufjs/minimal";
import { Device } from "./device";
import { EventPb } from "./event_pb";
import { Kv } from "./kv";
import { Params } from "./params";

export const protobufPackage = "stccommunity.iotdepinprotocol.iotdepinprotocol";

/** GenesisState defines the iotdepinprotocol module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  deviceList: Device[];
  kvList: Kv[];
  eventPbList: EventPb[];
}

function createBaseGenesisState(): GenesisState {
  return { params: undefined, deviceList: [], kvList: [], eventPbList: [] };
}

export const GenesisState = {
  encode(message: GenesisState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.deviceList) {
      Device.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    for (const v of message.kvList) {
      Kv.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    for (const v of message.eventPbList) {
      EventPb.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseGenesisState();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.deviceList.push(Device.decode(reader, reader.uint32()));
          break;
        case 3:
          message.kvList.push(Kv.decode(reader, reader.uint32()));
          break;
        case 4:
          message.eventPbList.push(EventPb.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    return {
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
      deviceList: Array.isArray(object?.deviceList) ? object.deviceList.map((e: any) => Device.fromJSON(e)) : [],
      kvList: Array.isArray(object?.kvList) ? object.kvList.map((e: any) => Kv.fromJSON(e)) : [],
      eventPbList: Array.isArray(object?.eventPbList) ? object.eventPbList.map((e: any) => EventPb.fromJSON(e)) : [],
    };
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined && (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    if (message.deviceList) {
      obj.deviceList = message.deviceList.map((e) => e ? Device.toJSON(e) : undefined);
    } else {
      obj.deviceList = [];
    }
    if (message.kvList) {
      obj.kvList = message.kvList.map((e) => e ? Kv.toJSON(e) : undefined);
    } else {
      obj.kvList = [];
    }
    if (message.eventPbList) {
      obj.eventPbList = message.eventPbList.map((e) => e ? EventPb.toJSON(e) : undefined);
    } else {
      obj.eventPbList = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<GenesisState>, I>>(object: I): GenesisState {
    const message = createBaseGenesisState();
    message.params = (object.params !== undefined && object.params !== null)
      ? Params.fromPartial(object.params)
      : undefined;
    message.deviceList = object.deviceList?.map((e) => Device.fromPartial(e)) || [];
    message.kvList = object.kvList?.map((e) => Kv.fromPartial(e)) || [];
    message.eventPbList = object.eventPbList?.map((e) => EventPb.fromPartial(e)) || [];
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Array<infer U> ? Array<DeepPartial<U>> : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
