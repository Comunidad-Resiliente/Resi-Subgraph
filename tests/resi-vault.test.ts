import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { EtherReceived } from "../generated/schema"
import { EtherReceived as EtherReceivedEvent } from "../generated/ResiVault/ResiVault"
import { handleEtherReceived } from "../src/resi-vault"
import { createEtherReceivedEvent } from "./resi-vault-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let _from = Address.fromString("0x0000000000000000000000000000000000000001")
    let _value = BigInt.fromI32(234)
    let newEtherReceivedEvent = createEtherReceivedEvent(_from, _value)
    handleEtherReceived(newEtherReceivedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("EtherReceived created and stored", () => {
    assert.entityCount("EtherReceived", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "EtherReceived",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_from",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "EtherReceived",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_value",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
