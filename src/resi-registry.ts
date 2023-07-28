import {
  Initialized as InitializedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProjectAdded as ProjectAddedEvent,
  ProjectDisabled as ProjectDisabledEvent,
  RegistryInitialized as RegistryInitializedEvent,
  ResiTokenSet as ResiTokenSetEvent,
  SerieClosed as SerieClosedEvent,
  SerieCreated as SerieCreatedEvent,
  SerieSBTSet as SerieSBTSetEvent,
  SerieSupplyUpdated as SerieSupplyUpdatedEvent,
  TreasuryVaultSet as TreasuryVaultSetEvent,
  WithdrawFromVault as WithdrawFromVaultEvent
} from '../generated/ResiRegistry/ResiRegistry'
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
} from '../generated/schema'

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(event: OwnershipTransferredEvent): void {
  let entity = new OwnershipTransferred(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectAdded(event: ProjectAddedEvent): void {
  let entity = new ProjectAdded(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._name = event.params._name
  entity.serieId = event.params.serieId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectDisabled(event: ProjectDisabledEvent): void {
  let entity = new ProjectDisabled(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._name = event.params._name

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistryInitialized(event: RegistryInitializedEvent): void {
  let entity = new RegistryInitialized(event.transaction.hash.concatI32(event.logIndex.toI32()))

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResiTokenSet(event: ResiTokenSetEvent): void {
  let entity = new ResiTokenSet(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._resiToken = event.params._resiToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSerieClosed(event: SerieClosedEvent): void {
  let entity = new SerieClosed(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._id = event.params._id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSerieCreated(event: SerieCreatedEvent): void {
  let entity = new SerieCreated(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._id = event.params._id
  entity._startDate = event.params._startDate
  entity._endDate = event.params._endDate
  entity._numberOfProjects = event.params._numberOfProjects
  entity._maxSupply = event.params._maxSupply
  entity._vault = event.params._vault

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSerieSBTSet(event: SerieSBTSetEvent): void {
  let entity = new SerieSBTSet(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.activeSerieId = event.params.activeSerieId
  entity._sbt = event.params._sbt

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSerieSupplyUpdated(event: SerieSupplyUpdatedEvent): void {
  let entity = new SerieSupplyUpdated(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity.oldSupply = event.params.oldSupply
  entity.newSupply = event.params.newSupply

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTreasuryVaultSet(event: TreasuryVaultSetEvent): void {
  let entity = new TreasuryVaultSet(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._treasuryVault = event.params._treasuryVault

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawFromVault(event: WithdrawFromVaultEvent): void {
  let entity = new WithdrawFromVault(event.transaction.hash.concatI32(event.logIndex.toI32()))
  entity._serieId = event.params._serieId
  entity._amount = event.params._amount
  entity._to = event.params._to

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
