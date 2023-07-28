import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const reStart = atom<any>({
    key: 'reload',
    default: false,
    effects_UNSTABLE: [persistAtom],
});
