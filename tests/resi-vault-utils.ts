import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  EtherReceived,
  MainTokenUpdated,
  ResiVaultInitialized,
  TokenAdded,
  TokenReleased,
  TokenRemoved
} from "../generated/ResiVault/ResiVault"

export function createEtherReceivedEvent(
  _from: Address,
  _value: BigInt
): EtherReceived {
  let etherReceivedEvent = changetype<EtherReceived>(newMockEvent())

  etherReceivedEvent.parameters = new Array()

  etherReceivedEvent.parameters.push(
    new ethereum.EventParam("_from", ethereum.Value.fromAddress(_from))
  )
  etherReceivedEvent.parameters.push(
    new ethereum.EventParam("_value", ethereum.Value.fromUnsignedBigInt(_value))
  )

  return etherReceivedEvent
}

export function createMainTokenUpdatedEvent(
  oldToken: Address,
  TOKEN: Address
): MainTokenUpdated {
  let mainTokenUpdatedEvent = changetype<MainTokenUpdated>(newMockEvent())

  mainTokenUpdatedEvent.parameters = new Array()

  mainTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldToken", ethereum.Value.fromAddress(oldToken))
  )
  mainTokenUpdatedEvent.parameters.push(
    new ethereum.EventParam("TOKEN", ethereum.Value.fromAddress(TOKEN))
  )

  return mainTokenUpdatedEvent
}

export function createResiVaultInitializedEvent(
  _serieId: BigInt,
  _token: Address,
  _resiToken: Address
): ResiVaultInitialized {
  let resiVaultInitializedEvent = changetype<ResiVaultInitialized>(
    newMockEvent()
  )

  resiVaultInitializedEvent.parameters = new Array()

  resiVaultInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "_serieId",
      ethereum.Value.fromUnsignedBigInt(_serieId)
    )
  )
  resiVaultInitializedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )
  resiVaultInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "_resiToken",
      ethereum.Value.fromAddress(_resiToken)
    )
  )

  return resiVaultInitializedEvent
}

export function createTokenAddedEvent(
  _name: Bytes,
  _token: Address
): TokenAdded {
  let tokenAddedEvent = changetype<TokenAdded>(newMockEvent())

  tokenAddedEvent.parameters = new Array()

  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromFixedBytes(_name))
  )
  tokenAddedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )

  return tokenAddedEvent
}

export function createTokenReleasedEvent(
  TOKEN: Address,
  _amount: BigInt
): TokenReleased {
  let tokenReleasedEvent = changetype<TokenReleased>(newMockEvent())

  tokenReleasedEvent.parameters = new Array()

  tokenReleasedEvent.parameters.push(
    new ethereum.EventParam("TOKEN", ethereum.Value.fromAddress(TOKEN))
  )
  tokenReleasedEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )

  return tokenReleasedEvent
}

export function createTokenRemovedEvent(
  _name: Bytes,
  _token: Address
): TokenRemoved {
  let tokenRemovedEvent = changetype<TokenRemoved>(newMockEvent())

  tokenRemovedEvent.parameters = new Array()

  tokenRemovedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromFixedBytes(_name))
  )
  tokenRemovedEvent.parameters.push(
    new ethereum.EventParam("_token", ethereum.Value.fromAddress(_token))
  )

  return tokenRemovedEvent
}
