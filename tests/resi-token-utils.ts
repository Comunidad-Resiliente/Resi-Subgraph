import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  Exit,
  Initialized,
  MentorAdded,
  Paused,
  ProjectBuilderAdded,
  ResiBuilderAdded,
  ResiBurnt,
  ResiMinted,
  ResiRoleRemoved,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  TokenInitialized,
  Transfer,
  Unpaused
} from "../generated/ResiToken/ResiToken"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createExitEvent(
  account: Address,
  _amount: BigInt,
  _serieId: BigInt
): Exit {
  let exitEvent = changetype<Exit>(newMockEvent())

  exitEvent.parameters = new Array()

  exitEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  exitEvent.parameters.push(
    new ethereum.EventParam(
      "_amount",
      ethereum.Value.fromUnsignedBigInt(_amount)
    )
  )
  exitEvent.parameters.push(
    new ethereum.EventParam(
      "_serieId",
      ethereum.Value.fromUnsignedBigInt(_serieId)
    )
  )

  return exitEvent
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

export function createMentorAddedEvent(
  mentor: Address,
  project: Bytes
): MentorAdded {
  let mentorAddedEvent = changetype<MentorAdded>(newMockEvent())

  mentorAddedEvent.parameters = new Array()

  mentorAddedEvent.parameters.push(
    new ethereum.EventParam("mentor", ethereum.Value.fromAddress(mentor))
  )
  mentorAddedEvent.parameters.push(
    new ethereum.EventParam("project", ethereum.Value.fromFixedBytes(project))
  )

  return mentorAddedEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createProjectBuilderAddedEvent(
  projectBuilder: Address
): ProjectBuilderAdded {
  let projectBuilderAddedEvent = changetype<ProjectBuilderAdded>(newMockEvent())

  projectBuilderAddedEvent.parameters = new Array()

  projectBuilderAddedEvent.parameters.push(
    new ethereum.EventParam(
      "projectBuilder",
      ethereum.Value.fromAddress(projectBuilder)
    )
  )

  return projectBuilderAddedEvent
}

export function createResiBuilderAddedEvent(
  resiBuilder: Address
): ResiBuilderAdded {
  let resiBuilderAddedEvent = changetype<ResiBuilderAdded>(newMockEvent())

  resiBuilderAddedEvent.parameters = new Array()

  resiBuilderAddedEvent.parameters.push(
    new ethereum.EventParam(
      "resiBuilder",
      ethereum.Value.fromAddress(resiBuilder)
    )
  )

  return resiBuilderAddedEvent
}

export function createResiBurntEvent(
  account: Address,
  amount: BigInt
): ResiBurnt {
  let resiBurntEvent = changetype<ResiBurnt>(newMockEvent())

  resiBurntEvent.parameters = new Array()

  resiBurntEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  resiBurntEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return resiBurntEvent
}

export function createResiMintedEvent(
  account: Address,
  amount: BigInt
): ResiMinted {
  let resiMintedEvent = changetype<ResiMinted>(newMockEvent())

  resiMintedEvent.parameters = new Array()

  resiMintedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  resiMintedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return resiMintedEvent
}

export function createResiRoleRemovedEvent(
  _role: Bytes,
  _user: Address
): ResiRoleRemoved {
  let resiRoleRemovedEvent = changetype<ResiRoleRemoved>(newMockEvent())

  resiRoleRemovedEvent.parameters = new Array()

  resiRoleRemovedEvent.parameters.push(
    new ethereum.EventParam("_role", ethereum.Value.fromFixedBytes(_role))
  )
  resiRoleRemovedEvent.parameters.push(
    new ethereum.EventParam("_user", ethereum.Value.fromAddress(_user))
  )

  return resiRoleRemovedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createTokenInitializedEvent(
  treasury: Address,
  registry: Address
): TokenInitialized {
  let tokenInitializedEvent = changetype<TokenInitialized>(newMockEvent())

  tokenInitializedEvent.parameters = new Array()

  tokenInitializedEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )
  tokenInitializedEvent.parameters.push(
    new ethereum.EventParam("registry", ethereum.Value.fromAddress(registry))
  )

  return tokenInitializedEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
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
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
