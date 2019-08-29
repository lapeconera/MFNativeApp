import { types } from 'mobx-state-tree';

const UserStore = types.model('User', {
    token: types.bearer,
})
.actions(self=> ({
    userToken(Token)
}))



export default UserStore;