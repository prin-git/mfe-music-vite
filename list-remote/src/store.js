
import {data} from  './music-data.Js'

import {atom, useAtom} from 'jotai'
const detail=atom(data[0])
export const useDetails= ()=>useAtom(detail)