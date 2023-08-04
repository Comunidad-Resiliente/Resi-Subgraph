import {BigInt} from '@graphprotocol/graph-ts'
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
  WithdrawFromVault,
  Serie,
  Project
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

export function handleSerieCreated(event: SerieCreatedEvent): void {
  /*const serie = new Serie(event.transaction.hash)
  serie.active = true
  serie.created = true
  serie.serieId = event.params._id
  serie.startDate = event.params._startDate.toString()
  serie.endDate = event.params._endDate.toString()
  serie.currentProjects = 0
  serie.numberOfProjects = 0
  serie.currentSupply = new BigInt(0)
  serie.maxSupply = event.params._maxSupply
  serie.vault = event.params._vault

  serie.save()*/
}

export function handleProjectAdded(event: ProjectAddedEvent): void {
  /*let project = new Project(event.transaction.hash)
  project.name = event.params._name
  project.active = true
  const serie = Serie.load()
  project.serie = 
  */
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
