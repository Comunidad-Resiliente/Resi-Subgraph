import { newMockEvent } from "matchstick-as"
import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts"
import {
  Initialized,
  OwnershipTransferred,
  ProjectAdded,
  ProjectDisabled,
  RegistryInitialized,
  ResiTokenSet,
  SerieClosed,
  SerieCreated,
  SerieSBTSet,
  SerieSupplyUpdated,
  TreasuryVaultSet,
  WithdrawFromVault
} from "../generated/ResiRegistry/ResiRegistry"

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

export function createProjectAddedEvent(
  _name: Bytes,
  serieId: BigInt
): ProjectAdded {
  let projectAddedEvent = changetype<ProjectAdded>(newMockEvent())

  projectAddedEvent.parameters = new Array()

  projectAddedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromFixedBytes(_name))
  )
  projectAddedEvent.parameters.push(
    new ethereum.EventParam(
      "serieId",
      ethereum.Value.fromUnsignedBigInt(serieId)
    )
  )

  return projectAddedEvent
}

export function createProjectDisabledEvent(_name: Bytes): ProjectDisabled {
  let projectDisabledEvent = changetype<ProjectDisabled>(newMockEvent())

  projectDisabledEvent.parameters = new Array()

  projectDisabledEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromFixedBytes(_name))
  )

  return projectDisabledEvent
}

export function createRegistryInitializedEvent(): RegistryInitialized {
  let registryInitializedEvent = changetype<RegistryInitialized>(newMockEvent())

  registryInitializedEvent.parameters = new Array()

  return registryInitializedEvent
}

export function createResiTokenSetEvent(_resiToken: Address): ResiTokenSet {
  let resiTokenSetEvent = changetype<ResiTokenSet>(newMockEvent())

  resiTokenSetEvent.parameters = new Array()

  resiTokenSetEvent.parameters.push(
    new ethereum.EventParam(
      "_resiToken",
      ethereum.Value.fromAddress(_resiToken)
    )
  )

  return resiTokenSetEvent
}

export function createSerieClosedEvent(_id: BigInt): SerieClosed {
  let serieClosedEvent = changetype<SerieClosed>(newMockEvent())

  serieClosedEvent.parameters = new Array()

  serieClosedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )

  return serieClosedEvent
}

export function createSerieCreatedEvent(
  _id: BigInt,
  _startDate: BigInt,
  _endDate: BigInt,
  _numberOfProjects: BigInt,
  _maxSupply: BigInt,
  _vault: Address
): SerieCreated {
  let serieCreatedEvent = changetype<SerieCreated>(newMockEvent())

  serieCreatedEvent.parameters = new Array()

  serieCreatedEvent.parameters.push(
    new ethereum.EventParam("_id", ethereum.Value.fromUnsignedBigInt(_id))
  )
  serieCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_startDate",
      ethereum.Value.fromUnsignedBigInt(_startDate)
    )
  )
  serieCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_endDate",
      ethereum.Value.fromUnsignedBigInt(_endDate)
    )
  )
  serieCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_numberOfProjects",
      ethereum.Value.fromUnsignedBigInt(_numberOfProjects)
    )
  )
  serieCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_maxSupply",
      ethereum.Value.fromUnsignedBigInt(_maxSupply)
    )
  )
  serieCreatedEvent.parameters.push(
    new ethereum.EventParam("_vault", ethereum.Value.fromAddress(_vault))
  )

  return serieCreatedEvent
}

export function createSerieSBTSetEvent(
  activeSerieId: BigInt,
  _sbt: Address
): SerieSBTSet {
  let serieSbtSetEvent = changetype<SerieSBTSet>(newMockEvent())

  serieSbtSetEvent.parameters = new Array()

  serieSbtSetEvent.parameters.push(
    new ethereum.EventParam(
      "activeSerieId",
      ethereum.Value.fromUnsignedBigInt(activeSerieId)
    )
  )
  serieSbtSetEvent.parameters.push(
    new ethereum.EventParam("_sbt", ethereum.Value.fromAddress(_sbt))
  )

  return serieSbtSetEvent
}

export function createSerieSupplyUpdatedEvent(
  oldSupply: BigInt,
  newSupply: BigInt
): SerieSupplyUpdated {
  let serieSupplyUpdatedEvent = changetype<SerieSupplyUpdated>(newMockEvent())

  serieSupplyUpdatedEvent.parameters = new Array()

  serieSupplyUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldSupply",
      ethereum.Value.fromUnsignedBigInt(oldSupply)
    )
  )
  serieSupplyUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newSupply",
      ethereum.Value.fromUnsignedBigInt(newSupply)
    )
  )

  return serieSupplyUpdatedEvent
}

export function createTreasuryVaultSetEvent(
  _treasuryVault: Address
): TreasuryVaultSet {
  let treasuryVaultSetEvent = changetype<TreasuryVaultSet>(newMockEvent())

  treasuryVaultSetEvent.parameters = new Array()

  treasuryVaultSetEvent.parameters.push(
    new ethereum.EventParam(
      "_treasuryVault",
      ethereum.Value.fromAddress(_treasuryVault)
    )
  )

  return treasuryVaultSetEvent
}

export function createWithdrawFromVaultEvent(
  _serieId: BigInt,
  _amount: BigInt,
  _to: Address
): WithdrawFromVault {
  let withdrawFromVaultEvent = changetype<WithdrawFromVault>(newMockEvent())

  withdrawFromVaultEvent.parameters = new Array()

  withdrawFromVaultEvent.parameters.push(
    new ethereum.EventParam(
      "_serieId",
      ethereum.Value.fromUnsignedBigInt(_serieId)
    )
  )
  withdrawFromVaultEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  withdrawFromVaultEvent.parameters.push(
    new ethereum.EventParam("_to", ethereum.Value.fromAddress(_to))
  )

  return withdrawFromVaultEvent
}
