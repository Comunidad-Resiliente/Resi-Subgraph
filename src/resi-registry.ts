import {BigInt} from '@graphprotocol/graph-ts'
import {ethers} from 'ethers'
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
  ProjectDisabled,
  RegistryInitialized,
  ResiTokenSet,
  SerieClosed,
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

export function handleRegistryInitialized(event: RegistryInitializedEvent): void {
  let entity = new RegistryInitialized(event.transaction.hash.concatI32(event.logIndex.toI32()))

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSerieCreated(event: SerieCreatedEvent): void {
  const serie = new Serie(event.params._id.toString())
  serie.active = true
  serie.created = true
  serie.startDate = event.params._startDate.toString()
  serie.endDate = event.params._endDate.toString()
  serie.currentProjects = 0
  serie.numberOfProjects = 0
  serie.currentSupply = new BigInt(0)
  serie.maxSupply = event.params._maxSupply
  serie.vault = event.params._vault

  serie.save()
}

export function handleProjectAdded(event: ProjectAddedEvent): void {
  const serie = Serie.load(event.params.serieId.toString())
  if (serie) {
    let project = new Project(event.params._name)
    project.name = ethers.decodeBytes32String(event.params._name)
    project.active = true

    serie.currentProjects++

    project.save()
    serie.save()
  }
}

export function handleProjectDisabled(event: ProjectDisabledEvent): void {
  const project = Project.load(event.params._name)
  if (project) {
    project.active = false
    project.save()
  }
}

export function handleSerieSBTSet(event: SerieSBTSetEvent): void {
  // const serie = Serie.load(event.params.activeSerieId.toString())
  // if(serie){
  //
  // }
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
