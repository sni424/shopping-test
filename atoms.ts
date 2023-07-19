import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
const { persistAtom } = recoilPersist();

export const userInfo = atom<any>({
    key: 'user',
    default: {
        created_at: '1',
        email: '1',
        exp: 1,
        iat: 1,
        id: 0,
        iss: '1',
        phone_number: '1',
        uid: '1',
        updated_at: '1',
    },
    effects_UNSTABLE: [persistAtom],
});
