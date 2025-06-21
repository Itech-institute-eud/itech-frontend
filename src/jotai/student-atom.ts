import { IResponse } from '@/components/custom/student-list'
import { PrimitiveAtom } from 'jotai'
import { atom } from 'jotai'

export const studentAtom = atom<PrimitiveAtom<IResponse>>()
