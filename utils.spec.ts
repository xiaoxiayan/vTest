import { describe, it, expect, vi } from "vitest";
import * as UtilsFns from "./utils";


describe('utils', () => {
    it('doubleVal', () => {
        let r = UtilsFns.doubleVal(1)
        expect(r).toBe(2)
    })

    it('setData', () => {
        vi.spyOn(UtilsFns, 'doubleVal' )
        const arr = [{a: '1', b: 2}]
        const r = UtilsFns.setData(arr, ['b'])[0]

        expect(UtilsFns.doubleVal).toBeCalled()
        expect(r).toEqual({a: '1', b: 4})

    })


})