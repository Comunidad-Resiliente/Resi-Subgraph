import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { Exit } from "../generated/schema"
import { Exit as ExitEvent } from "../generated/ResiToken/ResiToken"
import { handleExit } from "../src/resi-token"
import { createExitEvent } from "./resi-token-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let account = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let _amount = BigInt.fromI32(234)
    let _serieId = BigInt.fromI32(234)
    let newExitEvent = createExitEvent(account, _amount, _serieId)
    handleExit(newExitEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("Exit created and stored", () => {
    assert.entityCount("Exit", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "Exit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "account",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "Exit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_amount",
      "234"
    )
    assert.fieldEquals(
      "Exit",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "_serieId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
