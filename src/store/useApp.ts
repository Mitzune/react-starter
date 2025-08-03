import { create } from 'zustand'

type State = {
	count: number
}

type Actions = {
	setCount: (count: number) => void
}

const useApp = create<State & Actions>((set) => ({
	count: 0,

	setCount: (count) => set({ count }),
}))

export default useApp
