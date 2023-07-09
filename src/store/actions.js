import { ADD, INPUT } from "./constants";

export const setInput = payload => ({
    type: INPUT,
    payload
})

export const add = payload => ({
    type: ADD,
    payload
})