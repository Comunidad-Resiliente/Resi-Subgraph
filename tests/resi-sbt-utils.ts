import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  ApprovalForAll,
  ContractURIUpdated,
  DecreaseResiBalance,
  DefaultRoleUriUpdated,
  IncreaseResiBalance,
  Initialized,
  Locked,
  MintSBT,
  NicknameUpdated,
  OwnershipTransferred,
  RegistrySet,
  ResiSBTInitialized,
  SBTMintedByResiToken,
  Transfer,
  Unlocked
} from "../generated/ResiSBT/ResiSBT"

export function createApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createContractURIUpdatedEvent(
  contractUri: string
): ContractURIUpdated {
  let contractUriUpdatedEvent = changetype<ContractURIUpdated>(newMockEvent())

  contractUriUpdatedEvent.parameters = new Array()

  contractUriUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "contractUri",
      ethereum.Value.fromString(contractUri)
    )
  )

  return contractUriUpdatedEvent
}

export function createDecreaseResiBalanceEvent(
  to: Address,
  amount: BigInt
): DecreaseResiBalance {
  let decreaseResiBalanceEvent = changetype<DecreaseResiBalance>(newMockEvent())

  decreaseResiBalanceEvent.parameters = new Array()

  decreaseResiBalanceEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  decreaseResiBalanceEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return decreaseResiBalanceEvent
}

export function createDefaultRoleUriUpdatedEvent(
  oldUri: string,
  newUri: string
): DefaultRoleUriUpdated {
  let defaultRoleUriUpdatedEvent = changetype<DefaultRoleUriUpdated>(
    newMockEvent()
  )

  defaultRoleUriUpdatedEvent.parameters = new Array()

  defaultRoleUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("oldUri", ethereum.Value.fromString(oldUri))
  )
  defaultRoleUriUpdatedEvent.parameters.push(
    new ethereum.EventParam("newUri", ethereum.Value.fromString(newUri))
  )

  return defaultRoleUriUpdatedEvent
}

export function createIncreaseResiBalanceEvent(
  to: Address,
  amount: BigInt
): IncreaseResiBalance {
  let increaseResiBalanceEvent = changetype<IncreaseResiBalance>(newMockEvent())

  increaseResiBalanceEvent.parameters = new Array()

  increaseResiBalanceEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  increaseResiBalanceEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return increaseResiBalanceEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createLockedEvent(tokenId: BigInt): Locked {
  let lockedEvent = changetype<Locked>(newMockEvent())

  lockedEvent.parameters = new Array()

  lockedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return lockedEvent
}

export function createMintSBTEvent(
  _to: Address,
  _role: Bytes,
  _tokenId: BigInt
): MintSBT {
  let mintSbtEvent = changetype<MintSBT>(newMockEvent())

  mintSbtEvent.parameters = new Array()

  mintSbtEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  mintSbtEvent.parameters.push(
    new ethereum.EventParam("_role", ethereum.Value.fromFixedBytes(_role))
  )
  mintSbtEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return mintSbtEvent
}

export function createNicknameUpdatedEvent(
  user: Address,
  nickname: Bytes
): NicknameUpdated {
  let nicknameUpdatedEvent = changetype<NicknameUpdated>(newMockEvent())

  nicknameUpdatedEvent.parameters = new Array()

  nicknameUpdatedEvent.parameters.push(
    new ethereum.EventParam("user", ethereum.Value.fromAddress(user))
  )
  nicknameUpdatedEvent.parameters.push(
    new ethereum.EventParam("nickname", ethereum.Value.fromFixedBytes(nickname))
  )

  return nicknameUpdatedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createRegistrySetEvent(_registry: Address): RegistrySet {
  let registrySetEvent = changetype<RegistrySet>(newMockEvent())

  registrySetEvent.parameters = new Array()

  registrySetEvent.parameters.push(
    new ethereum.EventParam("_registry", ethereum.Value.fromAddress(_registry))
  )

  return registrySetEvent
}

export function createResiSBTInitializedEvent(
  _name: string,
  _symbol: string,
  _serieId: BigInt,
  _registry: Address,
  _resiToken: Address
): ResiSBTInitialized {
  let resiSbtInitializedEvent = changetype<ResiSBTInitialized>(newMockEvent())

  resiSbtInitializedEvent.parameters = new Array()

  resiSbtInitializedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  resiSbtInitializedEvent.parameters.push(
    new ethereum.EventParam("_symbol", ethereum.Value.fromString(_symbol))
  )
  resiSbtInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "_serieId",
      ethereum.Value.fromUnsignedBigInt(_serieId)
    )
  )
  resiSbtInitializedEvent.parameters.push(
    new ethereum.EventParam("_registry", ethereum.Value.fromAddress(_registry))
  )
  resiSbtInitializedEvent.parameters.push(
    new ethereum.EventParam(
      "_resiToken",
      ethereum.Value.fromAddress(_resiToken)
    )
  )

  return resiSbtInitializedEvent
}

export function createSBTMintedByResiTokenEvent(
  _to: Address,
  _role: Bytes,
  _tokenId: BigInt
): SBTMintedByResiToken {
  let sbtMintedByResiTokenEvent = changetype<SBTMintedByResiToken>(
    newMockEvent()
  )

  sbtMintedByResiTokenEvent.parameters = new Array()

  sbtMintedByResiTokenEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )
  sbtMintedByResiTokenEvent.parameters.push(
    new ethereum.EventParam("_role", ethereum.Value.fromFixedBytes(_role))
  )
  sbtMintedByResiTokenEvent.parameters.push(
    new ethereum.EventParam(
      "_tokenId",
      ethereum.Value.fromUnsignedBigInt(_tokenId)
    )
  )

  return sbtMintedByResiTokenEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return transferEvent
}

export function createUnlockedEvent(tokenId: BigInt): Unlocked {
  let unlockedEvent = changetype<Unlocked>(newMockEvent())

  unlockedEvent.parameters = new Array()

  unlockedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return unlockedEvent
}
