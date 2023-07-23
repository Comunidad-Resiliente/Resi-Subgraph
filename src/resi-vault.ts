import {
  EtherReceived as EtherReceivedEvent,
  MainTokenUpdated as MainTokenUpdatedEvent,
  ResiVaultInitialized as ResiVaultInitializedEvent,
  TokenAdded as TokenAddedEvent,
  TokenReleased as TokenReleasedEvent,
  TokenRemoved as TokenRemovedEvent
} from "../generated/ResiVault/ResiVault"
import {
  EtherReceived,
  MainTokenUpdated,
  ResiVaultInitialized,
  TokenAdded,
  TokenReleased,
  TokenRemoved
} from "../generated/schema"

export function handleEtherReceived(event: EtherReceivedEvent): void {
  let entity = new EtherReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._from = event.params._from
  entity._value = event.params._value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleMainTokenUpdated(event: MainTokenUpdatedEvent): void {
  let entity = new MainTokenUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldToken = event.params.oldToken
  entity.TOKEN = event.params.TOKEN

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleResiVaultInitialized(
  event: ResiVaultInitializedEvent
): void {
  let entity = new ResiVaultInitialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._serieId = event.params._serieId
  entity._token = event.params._token
  entity._resiToken = event.params._resiToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenAdded(event: TokenAddedEvent): void {
  let entity = new TokenAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name
  entity._token = event.params._token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenReleased(event: TokenReleasedEvent): void {
  let entity = new TokenReleased(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.TOKEN = event.params.TOKEN
  entity._amount = event.params._amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTokenRemoved(event: TokenRemovedEvent): void {
  let entity = new TokenRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity._name = event.params._name
  entity._token = event.params._token

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
