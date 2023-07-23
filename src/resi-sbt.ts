import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  ContractURIUpdated as ContractURIUpdatedEvent,
  DecreaseResiBalance as DecreaseResiBalanceEvent,
  DefaultRoleUriUpdated as DefaultRoleUriUpdatedEvent,
  IncreaseResiBalance as IncreaseResiBalanceEvent,
  Initialized as InitializedEvent,
  Locked as LockedEvent,
  MintSBT as MintSBTEvent,
  NicknameUpdated as NicknameUpdatedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  RegistrySet as RegistrySetEvent,
  ResiSBTInitialized as ResiSBTInitializedEvent,
  SBTMintedByResiToken as SBTMintedByResiTokenEvent,
  Transfer as TransferEvent,
  Unlocked as UnlockedEvent
} from "../generated/ResiSBT/ResiSBT"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleContractURIUpdated(event: ContractURIUpdatedEvent): void {
  let entity = new ContractURIUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractUri = event.params.contractUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDecreaseResiBalance(
  event: DecreaseResiBalanceEvent
): void {
  let entity = new DecreaseResiBalance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultRoleUriUpdated(
  event: DefaultRoleUriUpdatedEvent
): void {
  let entity = new DefaultRoleUriUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldUri = event.params.oldUri
  entity.newUri = event.params.newUri

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIncreaseResiBalance(
  event: IncreaseResiBalanceEvent
): void {
  let entity = new IncreaseResiBalance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.to = event.params.to
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLocked(event: LockedEvent): void {
  let entity = new Locked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMintSBT(event: MintSBTEvent): void {
  let entity = new MintSBT(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._to = event.params._to
  entity._role = event.params._role
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNicknameUpdated(event: NicknameUpdatedEvent): void {
  let entity = new NicknameUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user
  entity.nickname = event.params.nickname

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegistrySet(event: RegistrySetEvent): void {
  let entity = new RegistrySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._registry = event.params._registry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResiSBTInitialized(event: ResiSBTInitializedEvent): void {
  let entity = new ResiSBTInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name
  entity._symbol = event.params._symbol
  entity._serieId = event.params._serieId
  entity._registry = event.params._registry
  entity._resiToken = event.params._resiToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSBTMintedByResiToken(
  event: SBTMintedByResiTokenEvent
): void {
  let entity = new SBTMintedByResiToken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._to = event.params._to
  entity._role = event.params._role
  entity._tokenId = event.params._tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnlocked(event: UnlockedEvent): void {
  let entity = new Unlocked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenId = event.params.tokenId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
